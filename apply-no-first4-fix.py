#!/usr/bin/env python3
"""Patch ApocalypseCloset homepage to remove the temporary first four images.

Run this file from the project root (the folder containing index.html and outfits.js).
It creates backups before changing anything.
"""
from pathlib import Path
import re
import shutil
import sys

ROOT = Path.cwd()
INDEX = ROOT / 'index.html'
OUTFITS = ROOT / 'outfits.js'
NEW_OUTFITS = Path(__file__).resolve().parent / 'outfits.js'


def fail(message: str) -> None:
    print(f'ERROR: {message}')
    sys.exit(1)


def backup(path: Path) -> Path:
    backup_path = path.with_name(path.name + '.bak-before-no-first4')
    if not backup_path.exists():
        shutil.copy2(path, backup_path)
    return backup_path


if not INDEX.exists() or not OUTFITS.exists():
    fail('Hãy đặt thư mục fix vào đúng thư mục gốc có index.html và outfits.js rồi chạy lại.')
if not NEW_OUTFITS.exists():
    fail('Thiếu file outfits.js mới trong thư mục fix.')

index_text = INDEX.read_text(encoding='utf-8')
start_marker = '<div class="outfit-grid" id="outfit-grid">'
start = index_text.find(start_marker)
if start < 0:
    # Allow rerunning after the class has already been added.
    start_marker = '<div class="outfit-grid ac-grid-preparing" id="outfit-grid" aria-busy="true">'
    start = index_text.find(start_marker)
if start < 0:
    fail('Không tìm thấy #outfit-grid trong index.html.')

end = index_text.find('<section class="feed-end"', start)
if end < 0:
    fail('Không tìm thấy phần feed-end sau outfit-grid; chưa sửa để tránh cắt nhầm HTML.')

new_grid = '<div class="outfit-grid ac-grid-preparing" id="outfit-grid" aria-busy="true"></div>\n\n  '
index_text = index_text[:start] + new_grid + index_text[end:]

# First visit must use the same one-pass renderer as reload. This removes the
# temporary four-card layout and builds all 32 cards in one synchronous pass.
count_initial = index_text.count('renderInitialBatch(batchOutfits);')
index_text = index_text.replace('renderInitialBatch(batchOutfits);', 'renderAll(batchOutfits);')
if count_initial == 0 and 'renderAll(batchOutfits);' not in index_text:
    fail('Không tìm thấy lệnh render batch ban đầu trong index.html.')

# Cache bust both preload and script src.
index_text = re.sub(
    r'outfits\.js\?v=[^"\'\s>]+',
    'outfits.js?v=20260804-no-first4-v2',
    index_text,
)

style_id = 'ac-no-first4-index-guard-v2'
if style_id not in index_text:
    guard_style = (
        "\n  <style id=\"ac-no-first4-index-guard-v2\">\n"
        "    /* Reserve the feed area while JS constructs all card boxes once. */\n"
        "    #outfit-grid.ac-grid-preparing {\n"
        "      visibility: hidden !important;\n"
        "      min-height: 100vh !important;\n"
        "    }\n"
        "  </style>\n"
    )
    head_end = index_text.find('</head>')
    if head_end < 0:
        fail('index.html thiếu </head>.')
    index_text = index_text[:head_end] + guard_style + index_text[head_end:]

backup(INDEX)
backup(OUTFITS)
INDEX.write_text(index_text, encoding='utf-8')
shutil.copy2(NEW_OUTFITS, OUTFITS)

print('OK — đã bỏ 4 ảnh tải trước và chuyển homepage sang render một lần.')
print('Đã cập nhật: index.html, outfits.js')
print('Đã tạo backup: index.html.bak-before-no-first4, outfits.js.bak-before-no-first4')
print('Bây giờ Commit và Push hai file index.html + outfits.js.')

.PHONY: help install dev build extract test clean deploy

help:
	@echo "施工BIM教材サイト - Make Commands"
	@echo "=================================="
	@echo "make install    - 依存関係のインストール"
	@echo "make extract    - PDFから画像を抽出"
	@echo "make dev        - ローカルプレビュー起動"
	@echo "make build      - サイトをビルド"
	@echo "make test       - Lintとテストを実行"
	@echo "make clean      - ビルド成果物を削除"
	@echo "make deploy     - GitHub Pagesにデプロイ"

install:
	pip install -r requirements.txt

extract:
	python scripts/extract_pdf_images.py

dev:
	mkdocs serve -a 0.0.0.0:8000

build:
	mkdocs build

test:
	flake8 scripts/ --max-line-length=100
	black --check scripts/

clean:
	rm -rf site/
	rm -rf docs/assets/images/pdfs/

deploy:
	mkdocs gh-deploy --force

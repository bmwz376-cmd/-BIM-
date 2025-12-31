#!/usr/bin/env python3
"""
PDF画像抽出スクリプト
PDFファイルから各ページを画像として抽出し、メタデータYAMLを生成する
"""

import fitz  # PyMuPDF
import yaml
from pathlib import Path
from PIL import Image
import sys


class PDFImageExtractor:
    """PDFから画像を抽出するクラス"""
    
    def __init__(self, pdf_dir="data/pdfs", output_dir="docs/assets/images/pdfs", metadata_dir="data/metadata"):
        self.pdf_dir = Path(pdf_dir)
        self.output_dir = Path(output_dir)
        self.metadata_dir = Path(metadata_dir)
        
        # 出力ディレクトリ作成
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.metadata_dir.mkdir(parents=True, exist_ok=True)
    
    def extract_pdf(self, pdf_path, dpi=150):
        """
        PDFファイルから画像を抽出
        
        Args:
            pdf_path: PDFファイルのパス
            dpi: 画像の解像度（デフォルト150）
        """
        pdf_path = Path(pdf_path)
        pdf_name = pdf_path.stem
        
        print(f"\n処理中: {pdf_path.name}")
        
        # 出力ディレクトリ
        output_pdf_dir = self.output_dir / pdf_name
        output_pdf_dir.mkdir(parents=True, exist_ok=True)
        
        # PDFを開く
        doc = fitz.open(pdf_path)
        
        # メタデータ情報
        metadata = {
            "pdf_name": pdf_name,
            "original_file": pdf_path.name,
            "total_pages": len(doc),
            "pages": []
        }
        
        # 各ページを画像として抽出
        for page_num in range(len(doc)):
            page = doc[page_num]
            
            # ページを画像に変換（dpi指定）
            zoom = dpi / 72  # 72 dpi がデフォルト
            mat = fitz.Matrix(zoom, zoom)
            pix = page.get_pixmap(matrix=mat)
            
            # 画像ファイル名
            img_filename = f"page_{page_num + 1:03d}.png"
            img_path = output_pdf_dir / img_filename
            
            # 画像を保存
            pix.save(img_path)
            
            # ページメタデータ
            page_meta = {
                "page": page_num + 1,
                "filename": img_filename,
                "title": f"{pdf_name} - Page {page_num + 1}",
                "use_in": [],  # 使用箇所は手動で追加
                "description": ""  # 説明は手動で追加
            }
            
            metadata["pages"].append(page_meta)
            
            print(f"  ページ {page_num + 1}/{len(doc)} 抽出完了: {img_filename}")
        
        # メタデータをYAMLで保存
        metadata_path = self.metadata_dir / f"{pdf_name}.yaml"
        with open(metadata_path, "w", encoding="utf-8") as f:
            yaml.dump(metadata, f, allow_unicode=True, default_flow_style=False, sort_keys=False)
        
        print(f"✓ メタデータ保存: {metadata_path}")
        
        total_pages = len(doc)
        doc.close()
        return total_pages
    
    def extract_all(self):
        """data/pdfs内の全PDFを処理"""
        pdf_files = list(self.pdf_dir.glob("*.pdf"))
        
        if not pdf_files:
            print(f"エラー: {self.pdf_dir} にPDFファイルが見つかりません")
            return
        
        print(f"\n{'='*60}")
        print(f"PDF画像抽出開始: {len(pdf_files)}ファイル")
        print(f"{'='*60}")
        
        total_pages = 0
        for pdf_file in pdf_files:
            pages = self.extract_pdf(pdf_file)
            total_pages += pages
        
        print(f"\n{'='*60}")
        print(f"✓ 抽出完了!")
        print(f"  処理ファイル数: {len(pdf_files)}")
        print(f"  総ページ数: {total_pages}")
        print(f"  画像出力先: {self.output_dir}")
        print(f"  メタデータ出力先: {self.metadata_dir}")
        print(f"{'='*60}\n")


def main():
    """メイン処理"""
    extractor = PDFImageExtractor()
    extractor.extract_all()


if __name__ == "__main__":
    main()

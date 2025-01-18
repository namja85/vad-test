#!/bin/bash

# public 폴더 경로 설정
PUBLIC_DIR="public"

# 기존 파일들 삭제
rm -f $PUBLIC_DIR/*.wasm
rm -f $PUBLIC_DIR/vad.worklet.bundle.min.js
rm -f $PUBLIC_DIR/*.onnx

sleep 1

# 새 파일들 복사
cp node_modules/onnxruntime-web/dist/*.wasm $PUBLIC_DIR/
cp node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js $PUBLIC_DIR/
cp node_modules/@ricky0123/vad-web/dist/*.onnx $PUBLIC_DIR/

echo "file copied"
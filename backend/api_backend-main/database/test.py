import shutil
import os
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, UploadFile

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/upload-file/")
async def create_upload_file(uploaded_file: UploadFile = File(...)):    
    file_location = f"img/{uploaded_file.filename}"
    with open(file_location, "wb+") as file_object:
            shutil.copyfileobj(uploaded_file.file, file_object)    
    return {"info": f"img '{uploaded_file.filename}' saved at '{file_location}'"}
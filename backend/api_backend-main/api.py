import shutil
from typing import Union

from database.pymong import db_vin_check
from database.pymong import db_news
from database.pymong import extension_get
from database.pymong import add_extension

from database.vin_line import send_vin
from database.write import pdf_writ

from fastapi import FastAPI
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, File, Form, UploadFile

from pydantic import BaseModel
from typing_extensions import Annotated
 


class News(BaseModel):
    image: str
    name: str 
    creator: str 
    url: str 
    logo: str 

app = FastAPI()

app.mount("/img", StaticFiles(directory="img"), name="img")
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/news")
def read_room(input_text:str):
    if db_news(input_text) == None:
        return {"name": None,"prompay": None,"car_number" : None}
    return db_news(input_text)

@app.get("/vincheck")
def read_room(input_text:str):
    if db_vin_check(input_text) == None:
        return {"name": None,"prompay": None,"car_number" : None}
    return db_vin_check(input_text)

@app.get("/write_pdf")
def read_room(input_text:str):
    return pdf_writ(input_text)

@app.post("/vin_line")
def read_item(input_text:str):
    send_vin(input_text)
    return True

@app.get("/extension")
def read_item():
    return extension_get()  

@app.get("/pdf_check")
def read_item(input_text):
    if input_text == "6610702993":
        return "1"
    else:
         return "0"

@app.post("/post_extension2")
async def create_file(
    logo: Annotated[UploadFile, File()],
    image: Annotated[UploadFile, File()],
    name: Annotated[str, Form()],
    creator: Annotated[str, Form()],
    url: Annotated[str, Form()]):
    data = {
         "logo": None,
         "image": None,
         "name": None,
         "creator": None,
         "url":None,
    }
    data["name"] = name
    data["creator"] = creator
    data["url"] = 'https://ku-2-0.vercel.app/urldynamic?pdfurl='+url
    file_location1 = f"img/{image.filename}"
    with open(file_location1, "wb+") as file_object:
            shutil.copyfileobj(image.file, file_object)
    file_location = f"img/logo_{image.filename}"    
    with open(file_location, "wb+") as file_object:
            shutil.copyfileobj(image.file, file_object)    
    data["logo"] = 'https://api-c3vk.onrender.com/'+file_location
    data["image"] = 'https://api-c3vk.onrender.com/'+file_location1
    return add_extension(data)

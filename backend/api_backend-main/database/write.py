import io
from reportlab.pdfgen import canvas
from PyPDF2 import PdfReader, PdfWriter
import base64


def pdf_writ(input_api):
    input_api = input_api.split(",")
    input_pdf = PdfReader(open('database/pdf/General-Request.pdf', 'rb'))

    buffer = io.BytesIO()
    c = canvas.Canvas(buffer)
    c.drawString(95, 710, "Expel")
    c.drawString(200, 637, input_api[0])
    student_code= []
    for i in input_api[1]:
        student_code.append(i)
        
    c.drawString(132, 600, f"{student_code[0]}   {student_code[1]}   {student_code[2]}    {student_code[3]}    {student_code[4]}    {student_code[5]}   {student_code[6]}   {student_code[7]}   {student_code[8]}   {student_code[9]}")
    c.drawString(132, 500,"s")
    c.save()
    buffer.seek(0)
    text_pdf = PdfReader(buffer)

    output_pdf = PdfWriter()
    for i in range(len(input_pdf.pages)):
        page = input_pdf.pages[i]
        if i == 0:
            page.merge_page(text_pdf.pages[0])
        output_pdf.add_page(page)

    with open('database/pdf/output.pdf', 'wb') as f:
        output_pdf.write(f)
    with open("database/pdf/output.pdf", "rb") as pdf_file:
        encoded_string = base64.b64encode(pdf_file.read())
    return encoded_string

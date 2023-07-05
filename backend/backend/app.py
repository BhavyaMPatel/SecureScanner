import os
from flask import Flask,request,jsonify,send_from_directory
from flask_cors import CORS
from fileinput import filename
from werkzeug.utils import secure_filename
import spacy
from PyPDF2 import PdfReader
from fpdf import FPDF
pdf = FPDF()
pdf.add_font('DejaVu','', 'D:/Kajana/BroadbandHack_Prototype/backend/backend/DejaVuSansCondensed.ttf', uni=True)
pdf.set_font('DejaVu','', 14)
nlp = spacy.load("en_core_web_sm")


UPLOAD_FOLDER = os.path.abspath(os.path.dirname(__file__)) + '/uploadfiles'
FILE_FOLDER = os.path.abspath(os.path.dirname(__file__)) + '/files'

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif',
                          'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'csv', 'zip', 'rar', 'mp4',
                          'mp3', 'wav', 'avi', 'mkv', 'flv', 'mov', 'wmv'])

# def allowedFile(filename):
    # return '.' in filename and \
    #        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONSs

cors = CORS()

app = Flask(__name__)
@app.route('/')
def hello_world():
    return "WelCome To PII DataMasker Server"


@app.route('/data',methods=['GET', 'POST'],strict_slashes=True)
def get_time():
    if request.method == 'POST':
        res={"Hackathon":"Broadbridge"}
        return jsonify(res)
      
@app.route('/upload', methods=['POST', 'GET'])
def fileUpload():
    if request.method == 'POST':
        print("jDJON")
        file = request.files.getlist('file')
        # name={"name":"Fiel"}
        print(file)
        filename=""
        for f in file:
            print(f.filename)
            filename = f.filename
            f.save(os.path.join(UPLOAD_FOLDER, filename))
        print("Helpp")
        print(filename)
        mask_pii_data(filename)
        return jsonify({"name": "Hi", "status": "success"})
    else:
        return jsonify({"status": "Server Ignored"})
    
@app.route('/downloads/<FileName>',methods=['GET'])
def tos(FileName):
    workingdir = os.path.abspath(os.getcwd())
    filepath = workingdir + '/files'
    return send_from_directory(filepath, f'{FileName}')

@app.route('/allow/<Text>')
def allow(Text):
    return f'You have been allowed to enter because your text is {Text}'

def mask_pii_data(filename):
    print("Funtion is running on")
    final_text =""
    pdf_reader = PdfReader(f"{UPLOAD_FOLDER}/BhavyaMPatel_Resume.pdf")
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num] 
        page_text = page.extract_text()
        doc=nlp(page_text)
        final_text = final_text+' '.join("$$$" if token.ent_type_  else token.text for token in doc)
        page_text=page_text.replace(page_text,final_text)
    print(final_text)
    pdf.add_page()
    pdf.write(8, final_text)
    pdf.output(f"{FILE_FOLDER}/{filename}")


# Running app
if __name__ == '__main__':
    app.run(debug=True)
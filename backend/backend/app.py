import os
from flask import Flask,request,jsonify,send_from_directory
from flask_cors import CORS
from fileinput import filename
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = os.path.abspath(os.path.dirname(__file__)) + '/'

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
    return "Hi"


@app.route('/data',methods=['GET', 'POST'],strict_slashes=True)
def get_time():
    # Returning an api for showing in  reactjs
    if request.method == 'POST':
        res={"name":"Responce"}
        return jsonify(res)
      
@app.route('/upload', methods=['POST', 'GET'])
# API to upload file
def fileUpload():
    if request.method == 'POST':
        file = request.files.getlist('file')
        name={"name":"Fiel"}
        print(file)
        for f in file:
            print(f.filename)
            filename = f.filename
            # print(filename+"5")
        #     if allowedFile(filename):
        f.save(os.path.join(UPLOAD_FOLDER, filename))
        #     else:
        #         return jsonify({'message': 'File type not allowed'}), 400
        return jsonify({"name": "Hi", "status": "success"})
    # else:
    #     return jsonify({"status": "gey "})

@app.route('/downloads',methods=['GET'])
def tos():
    workingdir = os.path.abspath(os.getcwd())
    filepath = workingdir + '/'
    return send_from_directory(filepath, '1.pdf')
    # return 'h'

# Running app
if __name__ == '__main__':
    app.run(debug=True)
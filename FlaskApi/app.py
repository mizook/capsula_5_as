from flask import Flask, request, abort

app = Flask(__name__)

@app.before_request
def before_request():
    api_key = request.headers.get('X-API-KEY')
    if api_key != 'secret-key':
        abort(401)

@app.route('/order', methods=['GET'])
def get_all():
    return "GET all orders - Flask API", 200

@app.route('/order/<int:id>', methods=['GET'])
def get_by_id(id):
    return f"GET order {id} - Flask API", 200

@app.route('/order', methods=['POST'])
def create():
    return "POST new order - Flask API", 200

@app.route('/order/<int:id>', methods=['PUT'])
def update(id):
    return f"PUT update order {id} - Flask API", 200

@app.route('/order/<int:id>', methods=['DELETE'])
def delete(id):
    return f"DELETE order {id} - Flask API", 200

if __name__ == '__main__':
    app.run(port=5002)

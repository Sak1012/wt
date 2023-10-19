from flask import Flask, request, render_template

app = Flask(__name__)

# Route for the form page
@app.route('/form', methods=['GET'])
def show_form():
    return render_template('form.html')

# Route to handle the form submission
@app.route('/process_form', methods=['POST'])
def process_form():
    if request.method == 'POST':
        # Access form data using the 'request' object
        username = request.form.get('username')
        email = request.form.get('email')

        # Process the form data (you can add your own logic here)
        # For this example, we'll just print the data to the console
        print(f'Username: {username}')
        print(f'Email: {email}')

        # You can also send a response back to the client
        return "Form data received and processed successfully."

if __name__ == "__main__":
    app.run(debug=True)


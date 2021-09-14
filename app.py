from flask import Flask, render_template
import discord

app = Flask(__name__)
client = discord.Client()

@app.route('/<id>')
def index(id):
    return render_template('index.html', id=id)

if __name__ == '__main__':
    app.run(debug=True)
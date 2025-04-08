from flask import Flask, render_template

# Create the Flask app instance and specify the static folder
app = Flask(__name__, static_folder='static')

# Define your routes and other configurations as needed


class LanguageLearningApp:
    def __init__(self):
        self.languages = {
            'a': 'English',
            'b': 'French',
            'c': 'Spanish'
        }

    def select_language(self):
        print("Select a language:")
        for key, language in self.languages.items():
            print(f"{key}. {language}")

        choice = input("Enter your choice: ").strip().lower()
        if choice in self.languages:
            selected_language = self.languages[choice]
            # Redirect to Flask app to start game
            self.start_flask_app(selected_language)
        else:
            print("Invalid choice. Please try again.")
            self.select_language()

    def start_flask_app(self, language):
        app = Flask(__name__)
        app.static_folder = 'static'  # Set static folder
        app.config['TEMPLATES_AUTO_RELOAD'] = True  # Auto-reload templates
        app.jinja_env.auto_reload = True

        @app.route('/')
        def index():
            return render_template('index.html', language=language)

        @app.route('/rearrange')
        def rearrange_sentences():
            return render_template('rearrange_sentences.html')

        app.run(debug=True)


    def start_game(self, language):
        print(f"Welcome to the {language} Learning Game!")
        print("Choose a game to play:")
        print("a. Rearrange the sentences")
        print("b. Crossword Puzzles")
        print("c. Decoding the sentences")
        print("d. Interactive Stories")

        game_choice = input("Enter your choice: ").strip().lower()
        if game_choice == 'a':
            self.rearrange_sentences(language)
        elif game_choice == 'b':
            self.crossword_puzzles(language)
        elif game_choice == 'c':
            self.decode_sentences(language)
        elif game_choice == 'd':
            self.interactive_stories(language)
        else:
            print("Invalid choice. Please try again.")
            self.start_game(language)

    def rearrange_sentences(self, language):
        # Implementation for Rearrange the Sentences game
        print(f"You selected Rearrange the Sentences game for {language}")

    def crossword_puzzles(self, language):
        # Implementation for Crossword Puzzles game
        print(f"You selected Crossword Puzzles game for {language}")

    def decode_sentences(self, language):
        # Implementation for Decoding the Sentences game
        print(f"You selected Decoding the Sentences game for {language}")

    def interactive_stories(self, language):
        # Implementation for Interactive Stories game
        print(f"You selected Interactive Stories game for {language}")


if __name__ == "__main__":
    app = LanguageLearningApp()
    app.select_language()


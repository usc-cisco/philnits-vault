# philnits-vault

A flashcard Obsidian vault containing all past exam questions & explanations for the PhilNITS exam: created to collaboratively prepare for the upcoming PhilNITS exam in a single week.

## Usage 

```bash
git clone git@github.com:Luzefiru/philnits-vault.git
```

Then, we open the `philnits-vault` using Obsidian and we can press the `Review flashcards` button on the left ribbon.

You can also do `CTRL + P > Spaced Repetition: Select a deck to cram` to review all the cards in the deck, ignoring the schedule of previously-reviewed cards.

#### Resetting Flashcard Timers

> [!CAUTION]
> The [spaced repetition plugin](https://github.com/st3v3nmw/obsidian-spaced-repetition) currently does not support disabling the scheduling feature for the spaced repetition learning technique.
> - this means you cannot review the flashcards, after viewing them, for at least 1 day.

Our workaround is that you can simply run the `reset.bat` file and it will delete all the flashcard timers - allowing you to review the cards again.
- it runs `node "$(pwd)/resetFlashcardTimers.js"`

## Conventions on Creating Flashcards

> [!NOTE]
> To create a new note, do `CTRL + N` and write the name before doing `CTRL + T` to select the `000 Flashcard` template.

Take note of the following labelling conventions.
- note names should correspond to the PDF related to it together with the question number.
	- ie. question #55 `2023A_FE_AM_Questions.pdf` turns into `2023A_FE_AM_55`
- always add a `#category` to the `Category:` section in the metadata heading in order for us to separate the decks.
	- view the list of [[#Available Flashcard Categories]].
	- feel free to add more categories if none of the existing ones cover the topic your question is related to.
		- discuss it between the contributors before adding it.

### Flashcard Format

```md
Created: YYYY-MM-DD HH:mm
Category: #category-from-list
Status: #philnits

# 2024S_FE-A_83

What is the question of the current number?
a) wrong
b) wrong
c) answer
d) wrong
? 
c) answer

This is an explanation detailing the different actions or concepts taken to understanding the answer.

You can use LaTeX syntax in between two $$ like $\frac{a_{1}}{x^{2}}$.

You can also copy paste images into the explanation with CTRL + V.

This is the end of the explanation, I hope you now understand why c) is the answer at the first line of the card's back.

%% ignore this, it's the flashcard terminator %%
---

# References %% add your references here %%
- 
```
- put the correct answer in the FIRST LINE of the flashcard answer.
- the separator for the front & back of the flashcard is the `?` character on a new line.
- the end marker of a flashcard is a `---` separator in a new line.




## Available Flashcard Categories

> [!NOTE]
> Feel free to add more as necessary after discussing with the other flashcard contributors.
> - these determine the flashcard deck partitions.

- `#number-systems`
	- binary, decimal, octal, hexadecimal number conversions
- `#operating-systems`
	- CPU scheduling, kernel, functionalities, types of OS
- `#project-management`
	- project management concepts, Scrum, Agile, Waterfall Method
- `#accounting`
	- balance sheets, profit calculation, P/L statements
 - `#probability`
    	- statistics, probability

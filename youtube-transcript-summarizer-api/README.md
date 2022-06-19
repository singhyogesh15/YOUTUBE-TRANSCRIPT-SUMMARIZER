# youtube-transcript-summarizer-api

Youtube Transcript Summarizer API

# Project Overview
Youtube transcript summarizer is a project designed with the help of web development and Machine Learning, this project aims to provide summarized content of a video in the form of transcripts by keeping all the important points and making it short and easily understandable. The summarized text can also be downloaded easily.

# Problem and Solution Statement
There's a lot of content on the youtube which is lengthy and does not contain any fruitful information which is the major issue. A lot of time is spent on watching these contents and end up getting no relevant information out of it, makes our time and efforts of no use. So this issue is resolved by a tool which can provide summarization of the video and therefore saves time.

# Benchmark (How this solution is better?)
There are many available applications to do so. But this project aims to build a chrome extension, so that the user can use it efficiently. Other applications which aim to solve this particular problem, need the link of a particular video to be provided by the user while using this extension, you can get the summarized text of your video within a couple of clicks.

# Implementation strategy
A chrome extension is being created which has an option to paste the copied URL of the video being selected. The link is being provided and it will access the transcript of the particular audio using the YouTube transcript API and then the transcript will be provided to a machine learning model that will in return provide the summarized text of the transcript. The summarized text would be downloadable by the user.

Tech:
- Python
- HTML
- CSS
- JS
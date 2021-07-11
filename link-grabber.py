import json
from recipe_scrapers import scrape_me


fileLinks = open("recipe-list.txt", "r")
linkString = fileLinks.read()
fileLinks.close()

linkList = list(linkString.split(","))
linkList = list(dict.fromkeys(linkList))

output = []

i = 0

for link in linkList:
  temp = scrape_me(link)
  tempDict = {
    "index": i,
    "name": temp.title(),
    "ingredients": temp.ingredients(),
    "image": temp.image(),
    "link": link
  }
      
  output.append(tempDict)
  print(link)
  i += 1

file = open("options.json", "w")
file.write(json.dumps(output))
file.close()

#change unicode chars to 0.5 and so on
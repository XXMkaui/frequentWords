function frequentWords(text, frequentWordsNumber = 3) {
  let newArr = text.split(' ').filter(i => i != '')
  let letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]

  for (let i in newArr) {
    newArr[i] = newArr[i].split('')
    for (let j = 0; j < newArr[i].length; j++) {
      newArr[i][j] = newArr[i][j].toLowerCase()
      if (newArr[i][j] == "'" && letters.includes(newArr[i][j + 1]) && j != 0) continue
      if (letters.includes(newArr[i][j].toLowerCase()) == false) {
        newArr[i] = newArr[i].slice(0, j).concat(newArr[i].slice(j + 1))
        j -= 1
      }
    }
    newArr[i] = newArr[i].join('')
  }

  for (let i in newArr) {
    if (newArr[i] == '') newArr = newArr.slice(0, i).concat(newArr.slice(i + 1))
  }

  let words = {}
  for (let i in newArr) {
    if (words.hasOwnProperty(newArr[i])) words[newArr[i]] += 1
    else words[newArr[i]] = 1
  }

  let frequentWordsMap = new Map()
  let wordsMap
  if (Object.keys(words).length >= 3) {
    for (let j = 0; j < frequentWordsNumber; j++) {
      let max = -1;
      let index = -1
      wordsMap = Object.entries(words)
      for (let i in wordsMap) {
        if (wordsMap[i][1] > max) { max = wordsMap[i][1]; index = i }
      }
      frequentWordsMap.set(wordsMap[index][0], max)
      delete words[wordsMap[index][0]]
    }
  } else if (Object.keys(words).length == 2) {
    for (let j = 0; j < 2; j++) {
      let max = -1;
      let index = -1
      wordsMap = Object.entries(words)
      for (let i in wordsMap) {
        if (wordsMap[i][1] > max) { max = wordsMap[i][1]; index = i }
      }
      frequentWordsMap.set(wordsMap[index][0], max)
      delete words[wordsMap[index][0]]
    }
  } else if (Object.keys(words).length == 1) {
    wordsMap = Object.entries(words)
    frequentWordsMap.set(wordsMap[0][0], wordsMap[0][1])
  }
  return frequentWordsMap
}
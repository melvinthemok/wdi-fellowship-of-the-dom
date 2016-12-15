console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  var middleEarth = $('<section>').attr('id', 'middle-earth')
  // add each land as an article tag
  lands.forEach(function (landName) {
    var article = $('<article>')
    var h1 = $('<h1>').text(landName)
  // inside each article tag include an h1 with the name of the land
    article.append(h1)
    middleEarth.append(article)
  })
  // append middle-earth to your document body
  $('body').append(middleEarth)
}

makeMiddleEarth()

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var hobbitList = $('<ul>')
  $('article:first-child').append(hobbitList)
  hobbits.forEach(function (hobbitName) {
    var li = $('<li>').text(hobbitName)
    li.addClass('hobbit')
    hobbitList.append(li)
  })
  // give each hobbit a class of hobbit
}

makeHobbits()

// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  var theRing = $('<div>').attr('id', 'the-ring').addClass('magic-imbued-jewelry')
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var clicked = 0
  theRing.on('click', function () {
    clicked += 1
    nazgulScreech()
    var frodo = $('article:nth-child(3) ul li:first-child')
    frodo.animate({opacity: 0}, 0)
    frodo.animate({opacity: 1}, 1500)
    if (clicked >= 3) {
      $('body').remove()
      var newBody = $('<body>')
      newBody.css('background-image', 'none')
      newBody.css('color', 'black')
      newBody.css('font-size', '48px')
      var newP = $('<p>')
      newP.text('The Ring has been returned to Sauron and the world is over.')
      $('html').append(newBody)
      newBody.append(newP)
      console.log(newP)
    }
  })
  // add the ring as a child of Frodo
  $('li:first-child').append(theRing)
}

keepItSecretKeepItSafe()

// Part 4

function makeBuddies () {
  // create an aside tag
  var aside = $('<aside>')
  // attach an unordered list of the 'buddies' in the aside
  var buddiesList = $('<ul>')
  aside.append(buddiesList)
  buddies.forEach(function (buddiesName) {
    var li = $('<li>').text(buddiesName)
    buddiesList.append(li)
  })
  // insert your aside as a child element of rivendell
  $('article:nth-of-type(2)').append(aside)
}

makeBuddies()

// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = $('aside ul li:nth-child(4)')
  strider.html('Aragorn')
}

beautifulStranger()

// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  var hobbits = $('article:nth-of-type(1) ul li')
  var rivendell = $('article:nth-of-type(2) aside ul')
  rivendell.append(hobbits)
}

leaveTheShire()

// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // after each character is added make an alert that they have joined your party
  var fellowship = $('<div>').text('the-fellowship')
  var rivendell = $('article:nth-of-type(2)')
  rivendell.append(fellowship)
  // add each hobbit and buddy one at a time to 'the-fellowship'
  var fellowsList = $('article:nth-of-type(2) aside ul li')
  var fellowship = $('article:nth-of-type(2) div')
  var fellowshipList = $('<ul>')
  fellowship.append(fellowshipList)
  fellowsList.each(function () {
    fellowshipList.append($(this))
  })
}

forgeTheFellowShip()

// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  $('li:first-child').text('Gandalf the White')
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = $('li:first-child')
  gandalf.css('background', 'white')
  gandalf.css('border', '1px solid gray')
}

theBalrog()

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  alert('The horn of gondor has been blown')
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var Boromir = $('article:nth-of-type(2) div ul li:nth-child(5)')
  Boromir.css('text-decoration', 'line-through')
  // Remove Boromir from the Fellowship
  Boromir.remove()
}

hornOfGondor()

// Part 10

function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var mordor = $('article:nth-of-type(3)')
  var mordorList = $('<ul>')
  mordor.append(mordorList)
  $('article:nth-of-type(3) ul').append($('article:nth-of-type(2) div ul li:nth-child(5), article:nth-of-type(2) div ul li:nth-child(6)'))
  // add a div with an id of 'mount-doom' to Mordor
  var newDiv = $('<div>').attr('id', 'mount-doom')
  mordor.append(newDiv)
}

itsDangerousToGoAlone()

// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  var newDiv = $('<div>')
  newDiv.attr('id', 'gollum')
  $('article:nth-of-type(3)').append(newDiv)
  // Remove the ring from Frodo and give it to Gollum
  $('#gollum').append($('article:nth-of-type(3) ul li:first-child div'))
  // Move Gollum into Mount Doom
  $('#mount-doom').append($('#gollum'))
}

weWantsIt()

// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  $('#gollum, #the-ring').remove()
  // remove all the buddies from the document
  var buddies = $('article:nth-of-type(2) div ul li:first-child, article:nth-of-type(2) div ul li:nth-child(2), article:nth-of-type(2) div ul li:nth-child(3), article:nth-of-type(2) div ul li:nth-child(4)')
  buddies.remove()
  // Move all the hobbits back to the shire
  $('article:first-child ul').append($('.hobbit'))
}

// thereAndBackAgain()

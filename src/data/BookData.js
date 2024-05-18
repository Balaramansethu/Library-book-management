const BookData = [
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "subject": "Classic Literature",
    "publish_date": "1925-04-10",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Great+Gatsby"
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "subject": "Classic Literature",
    "publish_date": "1960-07-11",
    "coverImage": "https://via.placeholder.com/100x150?text=To+Kill+a+Mockingbird"
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "subject": "Dystopian Fiction",
    "publish_date": "1949-06-08",
    "coverImage": "https://via.placeholder.com/100x150?text=1984"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "subject": "Classic Literature",
    "publish_date": "1813-01-28",
    "coverImage": "https://via.placeholder.com/100x150?text=Pride+and+Prejudice"
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "subject": "Classic Literature",
    "publish_date": "1951-07-16",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Catcher+in+the+Rye"
  },
  {
    "title": "To the Lighthouse",
    "author": "Virginia Woolf",
    "subject": "Modernist Literature",
    "publish_date": "1927-05-05",
    "coverImage": "https://via.placeholder.com/100x150?text=To+the+Lighthouse"
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "subject": "Dystopian Fiction",
    "publish_date": "1932-10-14",
    "coverImage": "https://via.placeholder.com/100x150?text=Brave+New+World"
  },
  {
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "subject": "Adventure Fiction",
    "publish_date": "1851-10-18",
    "coverImage": "https://via.placeholder.com/100x150?text=Moby-Dick"
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "subject": "Fantasy",
    "publish_date": "1937-09-21",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Hobbit"
  },
  {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "subject": "Fantasy",
    "publish_date": "1954-07-29",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Lord+of+the+Rings"
  },
  {
    "title": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "subject": "Classic Literature",
    "publish_date": "1939-04-14",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Grapes+of+Wrath"
  },
  {
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "subject": "Gothic Fiction",
    "publish_date": "1890-07-20",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Picture+of+Dorian+Gray"
  },
  {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "subject": "Psychological Fiction",
    "publish_date": "1866-01-14",
    "coverImage": "https://via.placeholder.com/100x150?text=Crime+and+Punishment"
  },
  {
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel Garcia Marquez",
    "subject": "Magical Realism",
    "publish_date": "1967-05-30",
    "coverImage": "https://via.placeholder.com/100x150?text=One+Hundred+Years+of+Solitude"
  },
  {
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "subject": "Classic Literature",
    "publish_date": "1877-01-01",
    "coverImage": "https://via.placeholder.com/100x150?text=Anna+Karenina"
  },
  {
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "subject": "Gothic Fiction",
    "publish_date": "1818-01-01",
    "coverImage": "https://via.placeholder.com/100x150?text=Frankenstein"
  },
  {
    "title": "Wuthering Heights",
    "author": "Emily Bronte",
    "subject": "Gothic Fiction",
    "publish_date": "1847-12-01",
    "coverImage": "https://via.placeholder.com/100x150?text=Wuthering+Heights"
  },
  {
    "title": "Jane Eyre",
    "author": "Charlotte Bronte",
    "subject": "Gothic Fiction",
    "publish_date": "1847-10-16",
    "coverImage": "https://via.placeholder.com/100x150?text=Jane+Eyre"
  },
  {
    "title": "The Odyssey",
    "author": "Homer",
    "subject": "Epic Poetry",
    "publish_date": "8th century BCE",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Odyssey"
  },
  {
    "title": "The Iliad",
    "author": "Homer",
    "subject": "Epic Poetry",
    "publish_date": "8th century BCE",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Iliad"
  },
  {
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "subject": "Philosophical Fiction",
    "publish_date": "1880-11-26",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Brothers+Karamazov"
  },
  {
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "subject": "Historical Fiction",
    "publish_date": "1869-01-01",
    "coverImage": "https://via.placeholder.com/100x150?text=War+and+Peace"
  },
  {
    "title": "Great Expectations",
    "author": "Charles Dickens",
    "subject": "Classic Literature",
    "publish_date": "1861-08-01",
    "coverImage": "https://via.placeholder.com/100x150?text=Great+Expectations"
  },
  {
    "title": "Catch-22",
    "author": "Joseph Heller",
    "subject": "Satire",
    "publish_date": "1961-11-10",
    "coverImage": "https://via.placeholder.com/100x150?text=Catch-22"
  },
  {
    "title": "The Kite Runner",
    "author": "Khaled Hosseini",
    "subject": "Historical Fiction",
    "publish_date": "2003-05-29",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Kite+Runner"
  },
  {
    "title": "The Book Thief",
    "author": "Markus Zusak",
    "subject": "Historical Fiction",
    "publish_date": "2005-09-01",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Book+Thief"
  },
  {
    "title": "A Tale of Two Cities",
    "author": "Charles Dickens",
    "subject": "Historical Fiction",
    "publish_date": "1859-04-30",
    "coverImage": "https://via.placeholder.com/100x150?text=A+Tale+of+Two+Cities"
  },
  {
    "title": "Les Misérables",
    "author": "Victor Hugo",
    "subject": "Historical Fiction",
    "publish_date": "1862-01-01",
    "coverImage": "https://via.placeholder.com/100x150?text=Les+Misérables"
  },
  {
    "title": "Don Quixote",
    "author": "Miguel de Cervantes",
    "subject": "Adventure Fiction",
    "publish_date": "1605-01-01",
    "coverImage": "https://via.placeholder.com/100x150?text=Don+Quixote"
  },
  {
    "title": "The Divine Comedy",
    "author": "Dante Alighieri",
    "subject": "Epic Poetry",
    "publish_date": "1320-01-01",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Divine+Comedy"
  },
  {
    "title": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "subject": "Literary Fiction",
    "publish_date": "1952-09-01",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Old+Man+and+the+Sea"
  },
  {
    "title": "Slaughterhouse-Five",
    "author": "Kurt Vonnegut",
    "subject": "Science Fiction",
    "publish_date": "1969-03-31",
    "coverImage": "https://via.placeholder.com/100x150?text=Slaughterhouse-Five"
  },
  {
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "subject": "Dystopian Fiction",
    "publish_date": "1953-10-19",
    "coverImage": "https://via.placeholder.com/100x150?text=Fahrenheit+451"
  },
  {
    "title": "The Sound and the Fury",
    "author": "William Faulkner",
    "subject": "Southern Gothic",
    "publish_date": "1929-10-07",
    "coverImage": "https://via.placeholder.com/100x150?text=The+Sound+and+the+Fury"
  }
];

export default BookData;

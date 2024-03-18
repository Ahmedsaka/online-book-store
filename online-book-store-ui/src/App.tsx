import './App.css'
import Greet from "./components/Greet.tsx";
import Heading from "./components/Heading.tsx";
import Oscar from "./components/Oscar.tsx";
import BookList from "./components/BookList.tsx";

function App() {
  const personNames = [
      {
        first: 'Ahmed',
        last: 'Saka'
      },
      {
          first: 'Khadijah',
          last: 'Anthony'
      }
  ]

  return (
      <>
          {/*<h1 className="text-3xl font-bold underline">*/}
          {/*    Hello world!*/}
          {/*</h1>*/}
          <div>
              {/*<Greet name="Ahmed"  isLoggedIn={false}/>*/}
              {/*<PersonList names={personNames} />*/}
              {/*<Status status={'error'} />*/}
              {/*<Heading>I can now inject data from one component to another</Heading>*/}
              {/*<Oscar>*/}
              {/*    <Heading>I deserve an award for my brilliance :)</Heading>*/}
              {/*</Oscar>*/}
              <BookList books={books} />
          </div>
      </>
  )
}

export default App


const books = [
    {
        "id": "05c42ffc-7df5-48a6-b3cd-664d3547aa61",
        "title": "The Way of All Flesh",
        "isbnCode": "978663130477799",
        "author": "Joseph Konopelski II",
        "genre": "mystery",
        "yearOfPublication": "1936",
        "price": 4396.82,
        "stock": 1
    },
    {
        "id": "1f87c683-5655-4452-a64b-b5df15532afb",
        "title": "Let Us Now Praise Famous Men",
        "isbnCode": "978925199100408",
        "author": "Chris Lebsack II",
        "genre": "mystery",
        "yearOfPublication": "1927",
        "price": 2368.36,
        "stock": 17
    },
    {
        "id": "d0ea0c86-de67-4a8a-8eab-4e7760a7d29c",
        "title": "Little Hands Clapping",
        "isbnCode": "978626491009625",
        "author": "Marisol Stroman MD",
        "genre": "horror",
        "yearOfPublication": "1938",
        "price": 3007.99,
        "stock": 6
    },
    {
        "id": "8781e084-abf9-48d7-8b9f-0783a0d38e64",
        "title": "A Passage to India",
        "isbnCode": "978730480819168",
        "author": "Virgil Christiansen",
        "genre": "poetry",
        "yearOfPublication": "1967",
        "price": 3790.84,
        "stock": 18
    },
    {
        "id": "13a32eef-3796-401d-89e0-1998214cc646",
        "title": "The Monkey's Raincoat",
        "isbnCode": "978740241867721",
        "author": "Cassi Goodwin II",
        "genre": "mystery",
        "yearOfPublication": "1932",
        "price": 2181.93,
        "stock": 13
    },
    {
        "id": "5b78feb4-415a-4df0-b902-6a802f456711",
        "title": "The Road Less Traveled",
        "isbnCode": "978167413767844",
        "author": "Ermelinda Ward",
        "genre": "thriller",
        "yearOfPublication": "2001",
        "price": 2697.63,
        "stock": 9
    },
    {
        "id": "3b039229-2bcc-4d08-810d-e85637614479",
        "title": "Edna O'Brien",
        "isbnCode": "978990428743664",
        "author": "Hershel Schimmel IV",
        "genre": "mystery",
        "yearOfPublication": "1937",
        "price": 2978.69,
        "stock": 1
    },
    {
        "id": "30850466-8706-445b-887a-afdc84bf9458",
        "title": "What's Become of Waring",
        "isbnCode": "978381112842312",
        "author": "Alonso Gibson",
        "genre": "mystery",
        "yearOfPublication": "2019",
        "price": 3857.95,
        "stock": 13
    },
    {
        "id": "e104d3fb-2cd6-47d2-b546-97c7f32f2807",
        "title": "Beyond the Mexique Bay",
        "isbnCode": "978935389016162",
        "author": "Yuri Greenholt",
        "genre": "poetry",
        "yearOfPublication": "1942",
        "price": 2046.33,
        "stock": 10
    },
    {
        "id": "08ecd903-8104-468c-8005-a9f651d4f082",
        "title": "Death Be Not Proud",
        "isbnCode": "978571481989896",
        "author": "Andrew Hyatt",
        "genre": "poetry",
        "yearOfPublication": "2007",
        "price": 2988.86,
        "stock": 17
    },
    {
        "id": "0721a319-c0da-48e6-8e91-4294901cf1a7",
        "title": "The Man Within",
        "isbnCode": "978375004428229",
        "author": "Bryce Rowe",
        "genre": "poetry",
        "yearOfPublication": "1963",
        "price": 2497.15,
        "stock": 15
    },
    {
        "id": "575d69eb-2263-4d4f-b8ef-0069625779b5",
        "title": "Moab Is My Washpot",
        "isbnCode": "978305023459195",
        "author": "Dr. Domenic Ondricka",
        "genre": "thriller",
        "yearOfPublication": "2015",
        "price": 3010.93,
        "stock": 17
    },
    {
        "id": "f04b79ea-68aa-4a05-8c3c-13a2370dca26",
        "title": "The Little Foxes",
        "isbnCode": "978476874579913",
        "author": "Johnathan Jaskolski",
        "genre": "mystery",
        "yearOfPublication": "1965",
        "price": 4384.36,
        "stock": 14
    },
    {
        "id": "08517ac3-35ed-443f-96f1-361f957a04ba",
        "title": "Endless Night",
        "isbnCode": "978044642410973",
        "author": "Cherise Carter",
        "genre": "poetry",
        "yearOfPublication": "1984",
        "price": 4734.05,
        "stock": 16
    },
    {
        "id": "38b0f348-dba7-4029-a656-ccdf3e400b7e",
        "title": "Quo Vadis",
        "isbnCode": "978868922983887",
        "author": "Miss Chung Hyatt",
        "genre": "thriller",
        "yearOfPublication": "1997",
        "price": 3749.48,
        "stock": 18
    },
    {
        "id": "58d1d0ea-1da9-4033-81eb-f9ccb52a029e",
        "title": "Infinite Jest",
        "isbnCode": "978178400116562",
        "author": "Jesenia Blick",
        "genre": "poetry",
        "yearOfPublication": "1950",
        "price": 2674.07,
        "stock": 2
    },
    {
        "id": "aa96762c-fe3d-416c-b5c7-2f1288471589",
        "title": "The Waste Land",
        "isbnCode": "978421021404244",
        "author": "Davina Braun",
        "genre": "horror",
        "yearOfPublication": "2018",
        "price": 4882.43,
        "stock": 2
    },
    {
        "id": "36a9090b-d0a1-443f-a2fd-bf82748072a9",
        "title": "Ego Dominus Tuus",
        "isbnCode": "978042573947641",
        "author": "Ms. Lloyd Abbott",
        "genre": "friction",
        "yearOfPublication": "1945",
        "price": 2104.06,
        "stock": 17
    },
    {
        "id": "b2c51a0c-f498-4b7a-9b4b-97c405511ae7",
        "title": "Vanity Fair",
        "isbnCode": "978772424531013",
        "author": "Saturnina Cummings",
        "genre": "mystery",
        "yearOfPublication": "1939",
        "price": 2988.68,
        "stock": 15
    },
    {
        "id": "88fcd6bb-96d1-4b54-b5c7-7cc87d532cf0",
        "title": "Of Human Bondage",
        "isbnCode": "978868203239257",
        "author": "Rosendo Conn",
        "genre": "horror",
        "yearOfPublication": "1944",
        "price": 3156.84,
        "stock": 6
    },
    {
        "id": "de8e3e70-9915-40b9-a2ab-a76b4bdee22b",
        "title": "A Time of Gifts",
        "isbnCode": "978884872378107",
        "author": "Israel Kozey",
        "genre": "mystery",
        "yearOfPublication": "1981",
        "price": 2509.40,
        "stock": 2
    },
    {
        "id": "4eb9456a-7976-4397-a5b0-16c628314ec9",
        "title": "To Your Scattered Bodies Go",
        "isbnCode": "978098169164840",
        "author": "Dortha Renner",
        "genre": "friction",
        "yearOfPublication": "1938",
        "price": 2730.27,
        "stock": 6
    },
    {
        "id": "5f242874-a3dd-407b-846d-77caaac32b74",
        "title": "I Will Fear No Evil",
        "isbnCode": "978369623687128",
        "author": "Johnson Bruen",
        "genre": "thriller",
        "yearOfPublication": "1927",
        "price": 4299.96,
        "stock": 12
    },
    {
        "id": "7d7aa308-b040-4a1d-83e3-6714160a102d",
        "title": "I Know Why the Caged Bird Sings",
        "isbnCode": "978376545642958",
        "author": "Hans Hills",
        "genre": "thriller",
        "yearOfPublication": "1934",
        "price": 4374.95,
        "stock": 5
    },
    {
        "id": "141b02c7-2191-49e1-9cb2-4c9acf4743aa",
        "title": "What's Become of Waring",
        "isbnCode": "978643173948261",
        "author": "Miss Erma Crooks",
        "genre": "friction",
        "yearOfPublication": "1989",
        "price": 4833.08,
        "stock": 11
    },
    {
        "id": "56e8acdc-a1c6-4563-915a-2aa433d5ee44",
        "title": "The Glory and the Dream",
        "isbnCode": "978510722152857",
        "author": "Christoper Brown",
        "genre": "thriller",
        "yearOfPublication": "2013",
        "price": 2977.53,
        "stock": 2
    },
    {
        "id": "4c05257a-a613-41a3-9608-3c9600fe8d9f",
        "title": "The Mirror Crack'd from Side to Side",
        "isbnCode": "978879998927600",
        "author": "Joshua Veum",
        "genre": "horror",
        "yearOfPublication": "1995",
        "price": 4021.66,
        "stock": 6
    },
    {
        "id": "58d2c646-1f7e-42cc-9889-08d285ea0689",
        "title": "The Far-Distant Oxus",
        "isbnCode": "978880715805266",
        "author": "Santiago O'Conner",
        "genre": "thriller",
        "yearOfPublication": "1974",
        "price": 3440.22,
        "stock": 12
    },
    {
        "id": "0021ddd4-9cbb-4774-8a37-a17deb42046d",
        "title": "In a Glass Darkly",
        "isbnCode": "978233666366981",
        "author": "Joella Bernhard",
        "genre": "horror",
        "yearOfPublication": "1976",
        "price": 4009.37,
        "stock": 6
    },
    {
        "id": "3947222e-13f4-459f-8a47-2b1b6eebc8cf",
        "title": "Infinite Jest",
        "isbnCode": "978559811148182",
        "author": "Usha Nader",
        "genre": "mystery",
        "yearOfPublication": "1941",
        "price": 2783.78,
        "stock": 9
    },
    {
        "id": "aca56e2f-bc42-4310-8d79-947cf3a62ae9",
        "title": "A Swiftly Tilting Planet",
        "isbnCode": "978882904651925",
        "author": "Ms. Carlee Mills",
        "genre": "horror",
        "yearOfPublication": "1950",
        "price": 4679.25,
        "stock": 13
    },
    {
        "id": "ec51470d-536a-49fb-8ab7-a03ef06751a2",
        "title": "Things Fall Apart",
        "isbnCode": "978768011280293",
        "author": "Corrin Padberg",
        "genre": "friction",
        "yearOfPublication": "2007",
        "price": 3534.89,
        "stock": 5
    },
    {
        "id": "b5fc064e-0a67-41dd-96d8-61efd3a1e8e2",
        "title": "For a Breath I Tarry",
        "isbnCode": "978008228316864",
        "author": "Caroyln Weimann",
        "genre": "poetry",
        "yearOfPublication": "2004",
        "price": 3071.27,
        "stock": 17
    },
    {
        "id": "2d98508e-5217-486b-88f9-e4e5f03ef90b",
        "title": "Cover Her Face",
        "isbnCode": "978036360776714",
        "author": "Eleni Luettgen",
        "genre": "poetry",
        "yearOfPublication": "1997",
        "price": 4110.17,
        "stock": 15
    },
    {
        "id": "cd4659ac-b502-449c-a260-428e764f57d4",
        "title": "To a God Unknown",
        "isbnCode": "978898155190812",
        "author": "Mana Harvey Jr.",
        "genre": "poetry",
        "yearOfPublication": "2016",
        "price": 2662.61,
        "stock": 10
    },
    {
        "id": "68f5d9bc-2d4c-4fe8-b8b7-2b422f9f06db",
        "title": "Such, Such Were the Joys",
        "isbnCode": "978802222384003",
        "author": "Virgil Legros DDS",
        "genre": "mystery",
        "yearOfPublication": "2001",
        "price": 3930.65,
        "stock": 6
    },
    {
        "id": "52931c0d-ca33-4e51-8751-30a0a6e42246",
        "title": "Number the Stars",
        "isbnCode": "978328765755936",
        "author": "Ward Ryan",
        "genre": "thriller",
        "yearOfPublication": "1988",
        "price": 2641.49,
        "stock": 8
    },
    {
        "id": "79440bb8-7bb1-4688-91d7-53e3fa3800ab",
        "title": "An Acceptable Time",
        "isbnCode": "978821837154019",
        "author": "Lisette Robel",
        "genre": "poetry",
        "yearOfPublication": "1981",
        "price": 2195.15,
        "stock": 13
    },
    {
        "id": "318bf5ce-1a54-4e6f-b2c7-76107a09831c",
        "title": "Nine Coaches Waiting",
        "isbnCode": "978723143435844",
        "author": "Clair Waters",
        "genre": "mystery",
        "yearOfPublication": "1938",
        "price": 4873.86,
        "stock": 4
    },
    {
        "id": "b0a7aadd-297f-4b1d-bd18-815161f4d84e",
        "title": "An Instant In The Wind",
        "isbnCode": "978271353224745",
        "author": "Emmaline Langosh",
        "genre": "horror",
        "yearOfPublication": "1930",
        "price": 3496.84,
        "stock": 12
    },
    {
        "id": "4139e0bb-4a8e-4f27-8de6-af0e6f262912",
        "title": "Blood's a Rover",
        "isbnCode": "978830649558764",
        "author": "Mrs. Tod Reichel",
        "genre": "friction",
        "yearOfPublication": "2017",
        "price": 2340.50,
        "stock": 16
    },
    {
        "id": "a8240956-a2d6-42c0-88bf-dc9812a73e4d",
        "title": "The Wings of the Dove",
        "isbnCode": "978331542267575",
        "author": "Johnie Wintheiser",
        "genre": "mystery",
        "yearOfPublication": "1959",
        "price": 3603.34,
        "stock": 15
    },
    {
        "id": "45834d4d-9ba7-486a-9f89-fb39d80945ee",
        "title": "A Scanner Darkly",
        "isbnCode": "978648947325832",
        "author": "Alona Sanford",
        "genre": "friction",
        "yearOfPublication": "1986",
        "price": 3076.39,
        "stock": 0
    },
    {
        "id": "37c7e5c3-5bfc-46c1-9f5b-e7aed052c9ea",
        "title": "A Farewell to Arms",
        "isbnCode": "978422925162487",
        "author": "Bennie Schiller",
        "genre": "poetry",
        "yearOfPublication": "2009",
        "price": 4675.65,
        "stock": 14
    },
    {
        "id": "6bcb9869-9fc7-4ced-b1d3-9a7935320d7a",
        "title": "To a God Unknown",
        "isbnCode": "978638065363380",
        "author": "Belen Carter III",
        "genre": "friction",
        "yearOfPublication": "1956",
        "price": 3289.29,
        "stock": 1
    },
    {
        "id": "d48cd615-9e0e-4b14-a49a-63b736a23ace",
        "title": "A Many-Splendoured Thing",
        "isbnCode": "978426013476397",
        "author": "Dr. Blake Kuhlman",
        "genre": "poetry",
        "yearOfPublication": "2015",
        "price": 4879.86,
        "stock": 0
    },
    {
        "id": "e58882d1-fc36-4ecc-a47a-bae00ac95056",
        "title": "The Cricket on the Hearth",
        "isbnCode": "978877899740641",
        "author": "Luke Powlowski",
        "genre": "thriller",
        "yearOfPublication": "2002",
        "price": 2410.21,
        "stock": 17
    },
    {
        "id": "bbef248e-8cc9-4c42-b735-a945ea2d7297",
        "title": "The Cricket on the Hearth",
        "isbnCode": "978921275147104",
        "author": "Faustina Nader",
        "genre": "poetry",
        "yearOfPublication": "1930",
        "price": 2556.09,
        "stock": 15
    },
    {
        "id": "88a192d0-2ced-422d-a0e7-62ab33ae1935",
        "title": "A Scanner Darkly",
        "isbnCode": "978942533130472",
        "author": "Luke Nienow",
        "genre": "horror",
        "yearOfPublication": "1962",
        "price": 2597.66,
        "stock": 14
    },
    {
        "id": "7c1b68fc-3b11-4b2b-be81-8b70b82dc9ac",
        "title": "Arms and the Man",
        "isbnCode": "978731285454955",
        "author": "Cedric Brown",
        "genre": "friction",
        "yearOfPublication": "1977",
        "price": 3140.68,
        "stock": 16
    },
    {
        "id": "a49a2fc3-5c8f-48bc-bbf7-58289f2610d9",
        "title": "The Wealth of Nations",
        "isbnCode": "978749622336956",
        "author": "Minh Tromp",
        "genre": "poetry",
        "yearOfPublication": "1993",
        "price": 3346.37,
        "stock": 13
    },
    {
        "id": "b4ceb385-4547-496c-bb27-742f3755366f",
        "title": "The Mirror Crack'd from Side to Side",
        "isbnCode": "978233803310233",
        "author": "Waldo Ernser",
        "genre": "horror",
        "yearOfPublication": "2000",
        "price": 2180.69,
        "stock": 16
    },
    {
        "id": "f0570cce-d206-4915-9552-40970d0a0bfd",
        "title": "The Heart Is a Lonely Hunter",
        "isbnCode": "978365247987655",
        "author": "Gertha Hane DVM",
        "genre": "thriller",
        "yearOfPublication": "1944",
        "price": 4807.16,
        "stock": 15
    },
    {
        "id": "236446d2-9e15-458b-93bc-44a819ffc49d",
        "title": "Edna O'Brien",
        "isbnCode": "978673125439204",
        "author": "Dino Rau",
        "genre": "poetry",
        "yearOfPublication": "1980",
        "price": 3954.50,
        "stock": 3
    },
    {
        "id": "319d1ac5-dc95-4ace-8626-1a925429b94f",
        "title": "Endless Night",
        "isbnCode": "978910074637867",
        "author": "William Hill Jr.",
        "genre": "mystery",
        "yearOfPublication": "2023",
        "price": 2037.23,
        "stock": 9
    },
    {
        "id": "5f27e0fd-f9ff-4fd7-a1ca-261935b26714",
        "title": "The Soldier's Art",
        "isbnCode": "978129096920978",
        "author": "Sharen Nitzsche MD",
        "genre": "friction",
        "yearOfPublication": "1975",
        "price": 4583.96,
        "stock": 0
    },
    {
        "id": "c33e812d-8ecf-4bcd-9e22-f8aa1018b084",
        "title": "Quo Vadis",
        "isbnCode": "978628405474018",
        "author": "Johnson Keebler",
        "genre": "horror",
        "yearOfPublication": "1946",
        "price": 3741.32,
        "stock": 2
    },
    {
        "id": "adacaa39-0ae8-4072-8f40-7157a658ce30",
        "title": "Mother Night",
        "isbnCode": "978892134912595",
        "author": "Miss Dewey McKenzie",
        "genre": "thriller",
        "yearOfPublication": "1944",
        "price": 4557.70,
        "stock": 8
    },
    {
        "id": "ba490b70-628f-48d0-bec8-97baeab24023",
        "title": "Many Waters",
        "isbnCode": "978142544044532",
        "author": "Leandra Stracke",
        "genre": "mystery",
        "yearOfPublication": "1963",
        "price": 4059.05,
        "stock": 1
    },
    {
        "id": "ae043fcc-d2a6-482a-9f65-b03a560a6b29",
        "title": "The Painted Veil",
        "isbnCode": "978438518525415",
        "author": "Carmen Gaylord",
        "genre": "poetry",
        "yearOfPublication": "1992",
        "price": 3605.33,
        "stock": 6
    },
    {
        "id": "43a190b4-817e-41ba-8530-28328d874cfc",
        "title": "Ego Dominus Tuus",
        "isbnCode": "978512955974055",
        "author": "Mrs. Rubin Hane",
        "genre": "thriller",
        "yearOfPublication": "1979",
        "price": 2967.16,
        "stock": 3
    },
    {
        "id": "36e71414-8409-4d10-a4b8-6ab4439d9cd2",
        "title": "The Heart Is Deceitful Above All Things",
        "isbnCode": "978136896005292",
        "author": "Ms. Russell Stroman",
        "genre": "thriller",
        "yearOfPublication": "1942",
        "price": 4534.92,
        "stock": 0
    },
    {
        "id": "f5996ca6-8011-449f-8f8e-7f4d2d1e8eba",
        "title": "Ring of Bright Water",
        "isbnCode": "978573127137100",
        "author": "Thurman Gutkowski",
        "genre": "horror",
        "yearOfPublication": "2000",
        "price": 2550.38,
        "stock": 8
    },
    {
        "id": "1bc6504b-2702-4b55-884c-2646ad1d903c",
        "title": "Beyond the Mexique Bay",
        "isbnCode": "978808534685645",
        "author": "Lupita Mitchell III",
        "genre": "mystery",
        "yearOfPublication": "1970",
        "price": 2027.13,
        "stock": 9
    },
    {
        "id": "ab20a5a9-5adf-4d80-8b16-ec66b6e65051",
        "title": "The Painted Veil",
        "isbnCode": "978424833679364",
        "author": "Chang Durgan",
        "genre": "thriller",
        "yearOfPublication": "1962",
        "price": 2626.49,
        "stock": 2
    },
    {
        "id": "ac59a913-3ef1-47bd-8342-f6788962a013",
        "title": "O Pioneers!",
        "isbnCode": "978689266936325",
        "author": "Ms. Irwin Kovacek",
        "genre": "poetry",
        "yearOfPublication": "1940",
        "price": 2351.50,
        "stock": 17
    },
    {
        "id": "937c1c85-69db-453f-a4bb-be42e6effbb8",
        "title": "Moab Is My Washpot",
        "isbnCode": "978705234666239",
        "author": "Usha Crist PhD",
        "genre": "mystery",
        "yearOfPublication": "1935",
        "price": 3316.89,
        "stock": 2
    },
    {
        "id": "0a195748-fbe1-4fac-855a-0196d42a357b",
        "title": "Of Human Bondage",
        "isbnCode": "978250750522676",
        "author": "Zachary Shanahan",
        "genre": "friction",
        "yearOfPublication": "1924",
        "price": 3395.23,
        "stock": 15
    },
    {
        "id": "ae1b8087-2df6-4546-9369-d95065cc3607",
        "title": "The Widening Gyre",
        "isbnCode": "978197277323899",
        "author": "Gaylord Leffler",
        "genre": "mystery",
        "yearOfPublication": "1971",
        "price": 3513.46,
        "stock": 3
    },
    {
        "id": "5ed8ea2a-3898-49fa-90e5-4fc4f9bcb1e2",
        "title": "Infinite Jest",
        "isbnCode": "978656645078507",
        "author": "Kent Zieme",
        "genre": "horror",
        "yearOfPublication": "1975",
        "price": 2152.79,
        "stock": 8
    },
    {
        "id": "172f9f18-cd5b-46a7-a5b1-f63c5fcd1c59",
        "title": "No Longer at Ease",
        "isbnCode": "978683154804771",
        "author": "Mr. Gabriel Hessel",
        "genre": "mystery",
        "yearOfPublication": "1928",
        "price": 4633.50,
        "stock": 13
    },
    {
        "id": "b5fa67e6-010e-4e1a-8d53-921cf7e28396",
        "title": "Beneath the Bleeding",
        "isbnCode": "978460666669463",
        "author": "Samuel Hane",
        "genre": "friction",
        "yearOfPublication": "1949",
        "price": 3674.09,
        "stock": 4
    },
    {
        "id": "aa9ed71e-ca6a-468e-b77f-7cd087164688",
        "title": "Dulce et Decorum Est",
        "isbnCode": "978178036385401",
        "author": "Emerson Reichel",
        "genre": "horror",
        "yearOfPublication": "2017",
        "price": 2608.26,
        "stock": 6
    },
    {
        "id": "ba65b01b-de2c-48d0-964a-77eb4eb8748d",
        "title": "The Curious Incident of the Dog in the Night-Time",
        "isbnCode": "978578706550663",
        "author": "Stacey Hintz",
        "genre": "mystery",
        "yearOfPublication": "1996",
        "price": 3133.96,
        "stock": 2
    },
    {
        "id": "591fb4bd-7b08-4262-85ad-f0bad37621d3",
        "title": "A Scanner Darkly",
        "isbnCode": "978759421333877",
        "author": "Caitlyn Koelpin",
        "genre": "mystery",
        "yearOfPublication": "2010",
        "price": 2846.75,
        "stock": 17
    },
    {
        "id": "8f221a9f-9ccd-4181-a63d-f8895437c9d9",
        "title": "The Millstone",
        "isbnCode": "978516818452656",
        "author": "Lera Weimann",
        "genre": "poetry",
        "yearOfPublication": "2009",
        "price": 3676.39,
        "stock": 14
    },
    {
        "id": "a21e5800-58dd-4b48-83d9-69a82ea56754",
        "title": "No Highway",
        "isbnCode": "978613571569139",
        "author": "Sherly West",
        "genre": "friction",
        "yearOfPublication": "1928",
        "price": 2063.77,
        "stock": 8
    },
    {
        "id": "2af37ae0-3b99-4388-adbd-30a48fd63287",
        "title": "Have His Carcase",
        "isbnCode": "978357812761524",
        "author": "Robbie Feest",
        "genre": "friction",
        "yearOfPublication": "1979",
        "price": 4184.78,
        "stock": 16
    },
    {
        "id": "2fcfa14d-a590-4108-878f-5cc135f435ce",
        "title": "The Wealth of Nations",
        "isbnCode": "978911679145493",
        "author": "Mr. Leila Bogisich",
        "genre": "mystery",
        "yearOfPublication": "1938",
        "price": 2284.46,
        "stock": 1
    },
    {
        "id": "71b7aaf5-41d7-4255-868a-839e13a17ad0",
        "title": "As I Lay Dying",
        "isbnCode": "978565168190007",
        "author": "Trina Steuber",
        "genre": "mystery",
        "yearOfPublication": "2009",
        "price": 2207.40,
        "stock": 2
    },
    {
        "id": "fbfc4531-c02f-4475-8521-c1b5c549b6cf",
        "title": "The Moon by Night",
        "isbnCode": "978711405928185",
        "author": "Chloe Reichel",
        "genre": "friction",
        "yearOfPublication": "2003",
        "price": 4847.13,
        "stock": 7
    },
    {
        "id": "00023e0a-8fd8-4328-b67d-aeb48c7edb47",
        "title": "The Road Less Traveled",
        "isbnCode": "978282201815339",
        "author": "Lili Denesik",
        "genre": "poetry",
        "yearOfPublication": "1924",
        "price": 3359.34,
        "stock": 17
    },
    {
        "id": "692e8c27-daed-4bba-8ff0-17ff216b5f6d",
        "title": "I Know Why the Caged Bird Sings",
        "isbnCode": "978287249277420",
        "author": "Samella Smith",
        "genre": "friction",
        "yearOfPublication": "2021",
        "price": 4466.78,
        "stock": 19
    },
    {
        "id": "1cdc1fa3-c19b-4d35-b1b0-9cf054d16e40",
        "title": "In Dubious Battle",
        "isbnCode": "978895202118452",
        "author": "Isaias Sawayn",
        "genre": "poetry",
        "yearOfPublication": "1987",
        "price": 4920.45,
        "stock": 10
    },
    {
        "id": "cd38879a-52ff-43f7-87bb-6c1983c16f68",
        "title": "The Road Less Traveled",
        "isbnCode": "978983550570096",
        "author": "Irma Labadie",
        "genre": "friction",
        "yearOfPublication": "1949",
        "price": 3582.63,
        "stock": 17
    },
    {
        "id": "26483172-15d9-494c-88e3-b6bf43c2f15c",
        "title": "Unweaving the Rainbow",
        "isbnCode": "978427681182809",
        "author": "Jannie Pouros",
        "genre": "poetry",
        "yearOfPublication": "1964",
        "price": 3127.43,
        "stock": 17
    },
    {
        "id": "54e2437a-b31d-47da-8369-7cc3c88f309c",
        "title": "Great Work of Time",
        "isbnCode": "978515410960941",
        "author": "Inga Bartell",
        "genre": "mystery",
        "yearOfPublication": "1987",
        "price": 4829.56,
        "stock": 12
    },
    {
        "id": "f5394ff6-9178-4c14-a6ca-e3fcaea1727f",
        "title": "The House of Mirth",
        "isbnCode": "978104066899863",
        "author": "Victor Leannon",
        "genre": "mystery",
        "yearOfPublication": "1949",
        "price": 4341.02,
        "stock": 6
    },
    {
        "id": "9c3d8803-2292-4392-82d1-637d47171747",
        "title": "Let Us Now Praise Famous Men",
        "isbnCode": "978663312701137",
        "author": "Willie Kemmer",
        "genre": "friction",
        "yearOfPublication": "1974",
        "price": 3846.53,
        "stock": 0
    },
    {
        "id": "270b8d54-608e-40a0-a47f-168cd5a5a19e",
        "title": "The Doors of Perception",
        "isbnCode": "978306949580242",
        "author": "Myles Wiza I",
        "genre": "mystery",
        "yearOfPublication": "1976",
        "price": 3708.98,
        "stock": 17
    },
    {
        "id": "e88df642-366e-41ec-88cf-2c754dfa92a2",
        "title": "I Will Fear No Evil",
        "isbnCode": "978903208951451",
        "author": "Eula Lang",
        "genre": "poetry",
        "yearOfPublication": "1933",
        "price": 3090.63,
        "stock": 1
    },
    {
        "id": "275a3ec8-a287-41d7-bdea-01ffe455f483",
        "title": "The Green Bay Tree",
        "isbnCode": "978353585399350",
        "author": "Dr. Douglas Walter",
        "genre": "horror",
        "yearOfPublication": "1947",
        "price": 2640.96,
        "stock": 13
    },
    {
        "id": "86d22228-c654-4390-ba8b-d9346dedd72b",
        "title": "Little Hands Clapping",
        "isbnCode": "978130721346271",
        "author": "Daniell Balistreri DVM",
        "genre": "horror",
        "yearOfPublication": "2001",
        "price": 2619.15,
        "stock": 2
    },
    {
        "id": "03a100a2-517a-4151-b48c-8ed2e004c265",
        "title": "Mother Night",
        "isbnCode": "978988640304214",
        "author": "John Wisoky",
        "genre": "mystery",
        "yearOfPublication": "2005",
        "price": 2308.16,
        "stock": 13
    },
    {
        "id": "88f1ca5d-91de-44b7-866d-ec5846a786d0",
        "title": "O Jerusalem!",
        "isbnCode": "978084640702747",
        "author": "Zita Marquardt",
        "genre": "thriller",
        "yearOfPublication": "1958",
        "price": 2334.41,
        "stock": 13
    },
    {
        "id": "038e0e16-b729-4799-a0b6-ad8b15861081",
        "title": "The Sun Also Rises",
        "isbnCode": "978813550778016",
        "author": "Nedra O'Keefe DDS",
        "genre": "horror",
        "yearOfPublication": "2007",
        "price": 4690.36,
        "stock": 9
    },
    {
        "id": "0da645fd-9eeb-4dc3-9540-101c79954d29",
        "title": "To Say Nothing of the Dog",
        "isbnCode": "978446316541034",
        "author": "Sina Schmidt",
        "genre": "thriller",
        "yearOfPublication": "1951",
        "price": 4034.69,
        "stock": 11
    },
    {
        "id": "0f2796a8-5381-4339-875a-22fc5c76f8f4",
        "title": "Nine Coaches Waiting",
        "isbnCode": "978088465576453",
        "author": "Jefferson Goodwin",
        "genre": "poetry",
        "yearOfPublication": "1955",
        "price": 3398.49,
        "stock": 3
    },
    {
        "id": "396a4209-3ece-49d4-9730-5844e442f196",
        "title": "His Dark Materials",
        "isbnCode": "978555705900348",
        "author": "Mr. Sebastian Ondricka",
        "genre": "thriller",
        "yearOfPublication": "1938",
        "price": 3123.20,
        "stock": 9
    },
    {
        "id": "2ece023a-963d-49f7-a8d9-c0067f2c44ef",
        "title": "The Heart Is a Lonely Hunter",
        "isbnCode": "978429900761442",
        "author": "Erich Satterfield PhD",
        "genre": "mystery",
        "yearOfPublication": "1931",
        "price": 2420.62,
        "stock": 14
    },
    {
        "id": "8d679e38-4798-49e5-bb08-162c67046a30",
        "title": "What's Become of Waring",
        "isbnCode": "978129437670235",
        "author": "Alaine Jacobson",
        "genre": "horror",
        "yearOfPublication": "2015",
        "price": 2218.69,
        "stock": 18
    },
    {
        "id": "2ee7e366-51ff-4866-b34d-836e63f7b5aa",
        "title": "The Road Less Traveled",
        "isbnCode": "978208469199392",
        "author": "Dr. Phillip Anderson",
        "genre": "friction",
        "yearOfPublication": "1985",
        "price": 2967.22,
        "stock": 9
    },
    {
        "id": "938c05d4-cf1a-40cb-8c66-db0d05e61f48",
        "title": "The Curious Incident of the Dog in the Night-Time",
        "isbnCode": "978557016929546",
        "author": "Susie Volkman PhD",
        "genre": "horror",
        "yearOfPublication": "2018",
        "price": 4869.17,
        "stock": 5
    },
    {
        "id": "91b4f1b1-acba-425d-a4d9-0b9b774e2bfe",
        "title": "Antic Hay",
        "isbnCode": "978531608658740",
        "author": "Winfred Gerlach",
        "genre": "mystery",
        "yearOfPublication": "1979",
        "price": 2683.34,
        "stock": 8
    },
    {
        "id": "66a50c66-8a57-42a9-aae9-c18866fac62f",
        "title": "Stranger in a Strange Land",
        "isbnCode": "978836549971944",
        "author": "Many Lubowitz V",
        "genre": "friction",
        "yearOfPublication": "1949",
        "price": 3975.09,
        "stock": 0
    },
    {
        "id": "ded827fd-ba65-48f0-b680-fcf7c81dbef1",
        "title": "In Dubious Battle",
        "isbnCode": "978074478400828",
        "author": "Rolland Effertz",
        "genre": "mystery",
        "yearOfPublication": "1943",
        "price": 2492.59,
        "stock": 10
    },
    {
        "id": "1bb058de-8936-463b-b4cc-b1865c91f99f",
        "title": "Endless Night",
        "isbnCode": "978850187402703",
        "author": "Raymond Anderson",
        "genre": "poetry",
        "yearOfPublication": "1924",
        "price": 4458.18,
        "stock": 18
    },
    {
        "id": "d095834a-59ea-4cba-8cb8-fbe33498208b",
        "title": "The Painted Veil",
        "isbnCode": "978617054127927",
        "author": "Shalanda Gerhold",
        "genre": "thriller",
        "yearOfPublication": "1955",
        "price": 4442.48,
        "stock": 9
    },
    {
        "id": "c9bb945d-cd65-4136-9a15-2d18209fcfe6",
        "title": "Tiger! Tiger!",
        "isbnCode": "978776506870504",
        "author": "Ms. Steve Willms",
        "genre": "horror",
        "yearOfPublication": "1969",
        "price": 2501.13,
        "stock": 13
    },
    {
        "id": "0de6f05c-e7a8-4586-9067-478b2af05597",
        "title": "After Many a Summer Dies the Swan",
        "isbnCode": "978696505546680",
        "author": "Becky Rolfson",
        "genre": "mystery",
        "yearOfPublication": "1990",
        "price": 4046.79,
        "stock": 7
    },
    {
        "id": "4a9afd69-f88e-4fc5-a33c-e55d91ccfbf1",
        "title": "Cabbages and Kings",
        "isbnCode": "978494303094342",
        "author": "Mr. Stanford Pfeffer",
        "genre": "thriller",
        "yearOfPublication": "1952",
        "price": 3099.64,
        "stock": 9
    },
    {
        "id": "0a62eee2-e278-4028-a24b-23b21093619b",
        "title": "A Glass of Blessings",
        "isbnCode": "978774147252495",
        "author": "Jenna Jacobs",
        "genre": "thriller",
        "yearOfPublication": "1981",
        "price": 4797.80,
        "stock": 15
    },
    {
        "id": "d61c3e9a-143e-457b-a965-3277c4f97774",
        "title": "It's a Battlefield",
        "isbnCode": "978088334894059",
        "author": "Ms. Nella Green",
        "genre": "horror",
        "yearOfPublication": "1990",
        "price": 4703.51,
        "stock": 9
    },
    {
        "id": "d91fdecf-50c0-46a3-a61f-7f4078b23c9f",
        "title": "A Time of Gifts",
        "isbnCode": "978978216636694",
        "author": "Claudia Jacobs",
        "genre": "thriller",
        "yearOfPublication": "1949",
        "price": 3153.82,
        "stock": 16
    },
    {
        "id": "2dd645ef-2454-43bf-9560-880257ac564c",
        "title": "Endless Night",
        "isbnCode": "978305204760975",
        "author": "Miss Lashaunda Crooks",
        "genre": "friction",
        "yearOfPublication": "1940",
        "price": 2734.28,
        "stock": 3
    },
    {
        "id": "1d6451e8-0627-495f-a85a-936cdbdc07fa",
        "title": "Consider the Lilies",
        "isbnCode": "978104153978910",
        "author": "Marta Kub",
        "genre": "poetry",
        "yearOfPublication": "2000",
        "price": 4224.32,
        "stock": 8
    },
    {
        "id": "03ef8945-c4ec-4b39-a9b4-cf1fd06087cb",
        "title": "Jesting Pilate",
        "isbnCode": "978894806543215",
        "author": "Reiko Berge",
        "genre": "horror",
        "yearOfPublication": "1996",
        "price": 2357.79,
        "stock": 6
    },
    {
        "id": "d1b3eca3-fb3f-4897-a425-2c81e319d89b",
        "title": "Eyeless in Gaza",
        "isbnCode": "978834282126222",
        "author": "Justine Walker",
        "genre": "thriller",
        "yearOfPublication": "1981",
        "price": 2187.82,
        "stock": 2
    },
    {
        "id": "d7866ab9-c56e-45c3-82d5-f8dbdc392201",
        "title": "Absalom, Absalom!",
        "isbnCode": "978945456764132",
        "author": "Ms. Clarissa Reilly",
        "genre": "horror",
        "yearOfPublication": "2014",
        "price": 2828.67,
        "stock": 11
    },
    {
        "id": "beb345c9-a2ff-4360-b932-6869f1f43dd3",
        "title": "In a Glass Darkly",
        "isbnCode": "978520001773257",
        "author": "Chauncey Mraz",
        "genre": "poetry",
        "yearOfPublication": "1956",
        "price": 2514.19,
        "stock": 2
    },
    {
        "id": "902db744-69c9-4557-aa44-97a19e24209d",
        "title": "Nine Coaches Waiting",
        "isbnCode": "978828297308583",
        "author": "Calvin Goodwin",
        "genre": "friction",
        "yearOfPublication": "1983",
        "price": 4291.79,
        "stock": 0
    },
    {
        "id": "c373cc49-6ef5-4a6b-a6b1-d3eabe4bb7d9",
        "title": "Things Fall Apart",
        "isbnCode": "978832908810827",
        "author": "Wendie Mante",
        "genre": "friction",
        "yearOfPublication": "1983",
        "price": 3907.10,
        "stock": 16
    },
    {
        "id": "e6331c36-7959-46cc-8e4f-f7e32c159b52",
        "title": "All Passion Spent",
        "isbnCode": "978193136972345",
        "author": "Meridith Huel",
        "genre": "thriller",
        "yearOfPublication": "1987",
        "price": 2162.18,
        "stock": 15
    },
    {
        "id": "384e1d0e-cf6b-495e-a958-271a7a8cc5df",
        "title": "Those Barren Leaves, Thrones, Dominations",
        "isbnCode": "978089414916960",
        "author": "Jerold Schinner",
        "genre": "friction",
        "yearOfPublication": "2013",
        "price": 3590.83,
        "stock": 9
    },
    {
        "id": "685e035b-5024-4a32-b9f2-8d9ff2641b8d",
        "title": "The Moon by Night",
        "isbnCode": "978674490607835",
        "author": "Elbert Hilpert III",
        "genre": "thriller",
        "yearOfPublication": "1925",
        "price": 3426.84,
        "stock": 9
    },
    {
        "id": "579ab60b-192a-462e-af80-010159af402d",
        "title": "A Darkling Plain",
        "isbnCode": "978699182960028",
        "author": "Samantha Lubowitz",
        "genre": "friction",
        "yearOfPublication": "1998",
        "price": 3238.43,
        "stock": 15
    },
    {
        "id": "453f8753-2a77-4684-ab1d-36e3b5f08ae6",
        "title": "That Good Night",
        "isbnCode": "978739310730401",
        "author": "Vince Langworth",
        "genre": "mystery",
        "yearOfPublication": "2016",
        "price": 2072.02,
        "stock": 1
    },
    {
        "id": "36626fbe-2628-4021-bcfe-a0c12a8eb43d",
        "title": "The Way of All Flesh",
        "isbnCode": "978209651336057",
        "author": "Hilario Reichert MD",
        "genre": "mystery",
        "yearOfPublication": "1963",
        "price": 4766.70,
        "stock": 15
    },
    {
        "id": "0bfb9cd1-7783-42f4-8972-58ba959ab2cf",
        "title": "The Last Temptation",
        "isbnCode": "978200736035616",
        "author": "Myrtice Feeney",
        "genre": "friction",
        "yearOfPublication": "1984",
        "price": 3084.39,
        "stock": 8
    },
    {
        "id": "3811976e-723f-405c-8cca-a10f4d80bd09",
        "title": "From Here to Eternity",
        "isbnCode": "978726964616913",
        "author": "Britni Fadel",
        "genre": "mystery",
        "yearOfPublication": "2003",
        "price": 2376.44,
        "stock": 12
    },
    {
        "id": "a59cd3bc-c25d-4d45-bfec-022f6cb7823a",
        "title": "Blood's a Rover",
        "isbnCode": "978355099478814",
        "author": "Kenna Hahn DDS",
        "genre": "poetry",
        "yearOfPublication": "1993",
        "price": 2597.43,
        "stock": 14
    },
    {
        "id": "3c5c3243-26db-49b1-a926-001b3b118a1c",
        "title": "The Moving Finger",
        "isbnCode": "978823099624649",
        "author": "Cameron Rosenbaum Sr.",
        "genre": "horror",
        "yearOfPublication": "1996",
        "price": 4886.38,
        "stock": 8
    },
    {
        "id": "3a0a2dc0-cb0c-495c-968a-69c489f0140b",
        "title": "Clouds of Witness",
        "isbnCode": "978080131487122",
        "author": "Christopher Denesik",
        "genre": "thriller",
        "yearOfPublication": "2021",
        "price": 3718.51,
        "stock": 13
    },
    {
        "id": "26bfe7bf-120d-4f1a-9ac2-9f652d48f564",
        "title": "I Will Fear No Evil",
        "isbnCode": "978651492551810",
        "author": "Dr. Randal Franecki",
        "genre": "horror",
        "yearOfPublication": "2014",
        "price": 3971.45,
        "stock": 8
    },
    {
        "id": "7c9af24e-716f-43ca-b59d-0afa4c5ceb9b",
        "title": "His Dark Materials",
        "isbnCode": "978558393715368",
        "author": "Jerrell Moore",
        "genre": "mystery",
        "yearOfPublication": "1954",
        "price": 2732.91,
        "stock": 1
    },
    {
        "id": "a69b0d44-5039-4fc2-abe8-121feff67283",
        "title": "Ego Dominus Tuus",
        "isbnCode": "978493286688050",
        "author": "Don Hamill",
        "genre": "friction",
        "yearOfPublication": "1925",
        "price": 3974.07,
        "stock": 5
    },
    {
        "id": "74daffea-8010-4251-a915-d84832ed3552",
        "title": "The Wealth of Nations",
        "isbnCode": "978093528745585",
        "author": "Ms. Fausto Friesen",
        "genre": "poetry",
        "yearOfPublication": "1945",
        "price": 4903.11,
        "stock": 11
    },
    {
        "id": "728377dc-afd1-4e27-89aa-d2f568052ef7",
        "title": "Nectar in a Sieve",
        "isbnCode": "978047518157922",
        "author": "Camelia Ratke",
        "genre": "horror",
        "yearOfPublication": "1947",
        "price": 3286.49,
        "stock": 6
    },
    {
        "id": "2dded7ae-692d-40a2-8623-dfae3155b790",
        "title": "Cabbages and Kings",
        "isbnCode": "978819393253847",
        "author": "Dr. Renato Bergstrom",
        "genre": "poetry",
        "yearOfPublication": "1935",
        "price": 2128.98,
        "stock": 18
    },
    {
        "id": "252a4de3-67a9-49cc-af16-f0299a55cae9",
        "title": "The Soldier's Art",
        "isbnCode": "978945572912784",
        "author": "James Johnson",
        "genre": "friction",
        "yearOfPublication": "1935",
        "price": 2351.71,
        "stock": 3
    },
    {
        "id": "551a308d-67fb-4f17-bc36-c22d6d9505b4",
        "title": "When the Green Woods Laugh",
        "isbnCode": "978600775825920",
        "author": "Minh Heaney DDS",
        "genre": "friction",
        "yearOfPublication": "2002",
        "price": 3239.48,
        "stock": 10
    },
    {
        "id": "bb374bb3-5a42-4c80-a2d9-6451b647ae20",
        "title": "Blithe Spirit",
        "isbnCode": "978330303708619",
        "author": "Mr. Orville Windler",
        "genre": "mystery",
        "yearOfPublication": "1974",
        "price": 2668.01,
        "stock": 5
    },
    {
        "id": "c7888a09-5810-41c9-a65e-c7cd90bfd5a2",
        "title": "Oh! To be in England",
        "isbnCode": "978047514213019",
        "author": "Roseanne Abernathy Sr.",
        "genre": "mystery",
        "yearOfPublication": "2003",
        "price": 2428.58,
        "stock": 5
    },
    {
        "id": "875a13aa-203f-41d4-bfdb-fadcaa553cb3",
        "title": "Of Human Bondage",
        "isbnCode": "978183157898472",
        "author": "Mrs. Coy Jenkins",
        "genre": "friction",
        "yearOfPublication": "1942",
        "price": 3176.13,
        "stock": 1
    },
    {
        "id": "77863f46-b186-416a-8463-f93020de456b",
        "title": "Bury My Heart at Wounded Knee",
        "isbnCode": "978226775356801",
        "author": "Saundra Gulgowski",
        "genre": "horror",
        "yearOfPublication": "1970",
        "price": 3396.29,
        "stock": 0
    },
    {
        "id": "363a2390-1e57-4084-ac5c-31dec896b566",
        "title": "A Time of Gifts",
        "isbnCode": "978535810949670",
        "author": "Edgar Halvorson",
        "genre": "friction",
        "yearOfPublication": "2001",
        "price": 4834.09,
        "stock": 9
    },
    {
        "id": "3509b990-72cd-48d3-881e-6eb3198d17b9",
        "title": "Dance Dance Dance",
        "isbnCode": "978576297848204",
        "author": "Robbi Heidenreich",
        "genre": "friction",
        "yearOfPublication": "1993",
        "price": 2937.72,
        "stock": 6
    },
    {
        "id": "88ea94a4-5fbf-4503-a0be-921fd94ef77b",
        "title": "Dulce et Decorum Est",
        "isbnCode": "978514441780058",
        "author": "Neil Sanford",
        "genre": "horror",
        "yearOfPublication": "2016",
        "price": 3097.63,
        "stock": 18
    },
    {
        "id": "cdf64521-9bf2-4595-b6e7-04397cb2f4f9",
        "title": "It's a Battlefield",
        "isbnCode": "978893618573462",
        "author": "Carlos Barton",
        "genre": "poetry",
        "yearOfPublication": "2016",
        "price": 3538.12,
        "stock": 12
    },
    {
        "id": "410f798b-7b26-46aa-89af-11a85cbb599f",
        "title": "The Widening Gyre",
        "isbnCode": "978722924465641",
        "author": "Timothy Kozey",
        "genre": "horror",
        "yearOfPublication": "1962",
        "price": 2074.10,
        "stock": 4
    },
    {
        "id": "1f9e1841-5d92-476e-b93b-e8bd14479861",
        "title": "All Passion Spent",
        "isbnCode": "978000507831310",
        "author": "Jenine Prosacco III",
        "genre": "thriller",
        "yearOfPublication": "1967",
        "price": 2527.07,
        "stock": 4
    },
    {
        "id": "d83cfd49-6cb7-4a65-a166-e2703317f67b",
        "title": "The Painted Veil",
        "isbnCode": "978423211677047",
        "author": "Maren Schmeler",
        "genre": "poetry",
        "yearOfPublication": "2012",
        "price": 3601.89,
        "stock": 9
    },
    {
        "id": "0acb856b-1a33-4918-9da5-714659e53e11",
        "title": "Recalled to Life",
        "isbnCode": "978076587488947",
        "author": "Robin Schmitt III",
        "genre": "thriller",
        "yearOfPublication": "1963",
        "price": 2667.54,
        "stock": 18
    },
    {
        "id": "fced70ee-a1e0-47be-974b-e3efc6783b49",
        "title": "Alone on a Wide, Wide Sea",
        "isbnCode": "978875511006549",
        "author": "Charline DuBuque",
        "genre": "thriller",
        "yearOfPublication": "1945",
        "price": 3673.23,
        "stock": 15
    },
    {
        "id": "6b6e8c24-dc16-41d2-a9f9-4407636e4fc0",
        "title": "Wildfire at Midnight",
        "isbnCode": "978785247385505",
        "author": "Isidro West",
        "genre": "mystery",
        "yearOfPublication": "2013",
        "price": 4523.67,
        "stock": 7
    },
    {
        "id": "8b86c19a-8e2a-406f-800e-77af40ec0ca8",
        "title": "Dying of the Light",
        "isbnCode": "978879120523071",
        "author": "Larissa Langosh",
        "genre": "poetry",
        "yearOfPublication": "1943",
        "price": 3184.43,
        "stock": 18
    },
    {
        "id": "53b0fdce-c62b-4ade-b0ed-bb4637860224",
        "title": "The Mermaids Singing",
        "isbnCode": "978073459650875",
        "author": "Corey Crooks",
        "genre": "horror",
        "yearOfPublication": "1944",
        "price": 3140.33,
        "stock": 6
    },
    {
        "id": "03b8f482-1dbb-4e64-8996-04abbcf5b22d",
        "title": "Beyond the Mexique Bay",
        "isbnCode": "978808110766615",
        "author": "Ms. Monte Feil",
        "genre": "horror",
        "yearOfPublication": "1933",
        "price": 3992.81,
        "stock": 10
    },
    {
        "id": "89b96b8f-62af-4082-80d1-ed6acd985312",
        "title": "Let Us Now Praise Famous Men",
        "isbnCode": "978453853969310",
        "author": "Jarrett Koelpin",
        "genre": "mystery",
        "yearOfPublication": "1958",
        "price": 2638.78,
        "stock": 19
    },
    {
        "id": "5d3687db-26fa-4919-b0d3-f9845d5db701",
        "title": "No Longer at Ease",
        "isbnCode": "978605012990478",
        "author": "Letitia Osinski",
        "genre": "poetry",
        "yearOfPublication": "2009",
        "price": 4352.35,
        "stock": 6
    },
    {
        "id": "3a18cf4e-7568-4e73-836b-511915192d39",
        "title": "Carrion Comfort",
        "isbnCode": "978272229078565",
        "author": "Denis Harber PhD",
        "genre": "poetry",
        "yearOfPublication": "1968",
        "price": 3283.78,
        "stock": 7
    },
    {
        "id": "e6e089f8-407a-4da4-9dd8-0924ce3f1292",
        "title": "The Heart Is a Lonely Hunter",
        "isbnCode": "978972731590431",
        "author": "Jose Hoeger V",
        "genre": "thriller",
        "yearOfPublication": "1956",
        "price": 3011.65,
        "stock": 2
    },
    {
        "id": "c6ee530d-1346-4415-9beb-8841a5612934",
        "title": "Everything is Illuminated",
        "isbnCode": "978629222278158",
        "author": "Herman Torp IV",
        "genre": "friction",
        "yearOfPublication": "1953",
        "price": 2221.52,
        "stock": 5
    },
    {
        "id": "2de1f5cd-8a0e-404e-8b88-36b42240d636",
        "title": "Wildfire at Midnight",
        "isbnCode": "978618183736459",
        "author": "Sherman Walter II",
        "genre": "poetry",
        "yearOfPublication": "1997",
        "price": 2654.80,
        "stock": 7
    },
    {
        "id": "9ccdd2e9-6625-4229-9733-f0f48ac92458",
        "title": "The Sun Also Rises",
        "isbnCode": "978650983992361",
        "author": "Refugio Langworth",
        "genre": "poetry",
        "yearOfPublication": "1964",
        "price": 3920.78,
        "stock": 3
    },
    {
        "id": "ef0460f8-88cb-4800-bf70-de35db813eb8",
        "title": "The Cricket on the Hearth",
        "isbnCode": "978962912233351",
        "author": "Gretchen Gutkowski",
        "genre": "thriller",
        "yearOfPublication": "1985",
        "price": 2445.35,
        "stock": 18
    },
    {
        "id": "34ce678e-14a9-4541-81ea-743efe165382",
        "title": "Wildfire at Midnight",
        "isbnCode": "978663267469417",
        "author": "Virgilio Grimes III",
        "genre": "thriller",
        "yearOfPublication": "1943",
        "price": 4167.49,
        "stock": 8
    },
    {
        "id": "bc29d7bb-543a-445d-bfb6-e07bc5374a9d",
        "title": "Pale Kings and Princes",
        "isbnCode": "978271243106728",
        "author": "Lucien Armstrong",
        "genre": "mystery",
        "yearOfPublication": "1973",
        "price": 4888.87,
        "stock": 7
    },
    {
        "id": "93676908-ba7d-4ea2-9216-383a0ffe7e5f",
        "title": "Infinite Jest",
        "isbnCode": "978339224061872",
        "author": "Florrie Hill",
        "genre": "thriller",
        "yearOfPublication": "1997",
        "price": 4693.47,
        "stock": 14
    },
    {
        "id": "eb61b91a-d940-4714-9dd9-671d7b05ec1b",
        "title": "Dying of the Light",
        "isbnCode": "978570914167294",
        "author": "Allyn Carter",
        "genre": "thriller",
        "yearOfPublication": "1989",
        "price": 4050.25,
        "stock": 12
    },
    {
        "id": "74f44a70-d1fd-49c7-8ff6-6de0372d0e96",
        "title": "That Good Night",
        "isbnCode": "978620398843057",
        "author": "Cleora Kertzmann",
        "genre": "mystery",
        "yearOfPublication": "1928",
        "price": 3882.53,
        "stock": 6
    },
    {
        "id": "a6a6080c-8842-46be-9af6-06fd8d3fe47d",
        "title": "Françoise Sagan",
        "isbnCode": "978128643413780",
        "author": "Sherilyn Walter",
        "genre": "horror",
        "yearOfPublication": "1992",
        "price": 2500.28,
        "stock": 4
    },
    {
        "id": "65d55c5e-f376-4e71-b2d5-38ee6a8c4667",
        "title": "A Scanner Darkly",
        "isbnCode": "978513194565329",
        "author": "Miss Michael Kassulke",
        "genre": "friction",
        "yearOfPublication": "1980",
        "price": 3346.70,
        "stock": 9
    },
    {
        "id": "dd95cf34-891f-4412-b0ab-abee458ff9f6",
        "title": "A Time of Gifts",
        "isbnCode": "978409845236221",
        "author": "George Miller",
        "genre": "thriller",
        "yearOfPublication": "1945",
        "price": 3811.51,
        "stock": 6
    },
    {
        "id": "cd02270f-04be-4566-99ce-3521c32ce430",
        "title": "A Monstrous Regiment of Women",
        "isbnCode": "978203397162595",
        "author": "Ashely Beatty",
        "genre": "friction",
        "yearOfPublication": "2020",
        "price": 3942.36,
        "stock": 1
    },
    {
        "id": "fab3b71f-d5e2-441b-9911-3a6f89a2c2ab",
        "title": "Bury My Heart at Wounded Knee",
        "isbnCode": "978435679684078",
        "author": "Isidro Morar",
        "genre": "mystery",
        "yearOfPublication": "1994",
        "price": 4845.62,
        "stock": 16
    },
    {
        "id": "d47b94ca-4e36-420e-b484-6be6a6448645",
        "title": "Recalled to Life",
        "isbnCode": "978487860622939",
        "author": "Mrs. Geraldo Wintheiser",
        "genre": "thriller",
        "yearOfPublication": "1971",
        "price": 3926.78,
        "stock": 5
    },
    {
        "id": "a0e0a2ce-bded-4365-8e67-147afefb53c0",
        "title": "The Painted Veil",
        "isbnCode": "978866142390041",
        "author": "Mrs. Verlie Becker",
        "genre": "friction",
        "yearOfPublication": "1971",
        "price": 3860.84,
        "stock": 16
    },
    {
        "id": "acd20ffd-d224-464b-a31d-9458aa4f950d",
        "title": "All the King's Men",
        "isbnCode": "978802512212299",
        "author": "Jonell Torphy",
        "genre": "mystery",
        "yearOfPublication": "2017",
        "price": 4047.04,
        "stock": 19
    },
    {
        "id": "9a15e492-69ba-41b7-bae3-d99426812ba7",
        "title": "Tender Is the Night",
        "isbnCode": "978085074840096",
        "author": "Fairy Kiehn",
        "genre": "thriller",
        "yearOfPublication": "1975",
        "price": 2705.37,
        "stock": 0
    },
    {
        "id": "4de363d9-a441-4c97-9655-e5c1eea0cc5f",
        "title": "The Stars' Tennis Balls",
        "isbnCode": "978263548147008",
        "author": "Daryl Morar",
        "genre": "poetry",
        "yearOfPublication": "1974",
        "price": 4991.48,
        "stock": 8
    },
    {
        "id": "b8f0a5de-0544-465d-90db-94e6214bd12b",
        "title": "This Side of Paradise",
        "isbnCode": "978118643288505",
        "author": "Aline Bins",
        "genre": "horror",
        "yearOfPublication": "1993",
        "price": 4694.63,
        "stock": 15
    },
    {
        "id": "6de2d849-d701-41d6-bc92-0a4433909e8d",
        "title": "The Glory and the Dream",
        "isbnCode": "978248606469251",
        "author": "Latia Rutherford",
        "genre": "thriller",
        "yearOfPublication": "1944",
        "price": 2939.20,
        "stock": 6
    },
    {
        "id": "80dbf55c-8675-484f-a270-18964b410e1a",
        "title": "The Wealth of Nations",
        "isbnCode": "978698911611846",
        "author": "Irwin Stiedemann",
        "genre": "friction",
        "yearOfPublication": "1930",
        "price": 4775.20,
        "stock": 2
    },
    {
        "id": "b3037ddf-6c41-4784-acca-cc9efedc8dfa",
        "title": "When the Green Woods Laugh",
        "isbnCode": "978323458753500",
        "author": "Ms. Lesli Wiegand",
        "genre": "mystery",
        "yearOfPublication": "1953",
        "price": 4911.41,
        "stock": 15
    },
    {
        "id": "c947c20c-8e9e-4e7f-8ab1-674e1eff9abc",
        "title": "A Summer Bird-Cage",
        "isbnCode": "978929390931233",
        "author": "Miss Leigh Padberg",
        "genre": "mystery",
        "yearOfPublication": "2007",
        "price": 4721.47,
        "stock": 16
    },
    {
        "id": "fc46ba83-f686-46dc-9ef7-834a94047c83",
        "title": "Ah, Wilderness!",
        "isbnCode": "978448624970192",
        "author": "Allie Wilderman",
        "genre": "mystery",
        "yearOfPublication": "2018",
        "price": 4256.10,
        "stock": 4
    },
    {
        "id": "02c489a2-d141-4e53-bc80-c6e6838163c1",
        "title": "Let Us Now Praise Famous Men",
        "isbnCode": "978385101773501",
        "author": "Nathanael Beahan",
        "genre": "mystery",
        "yearOfPublication": "2021",
        "price": 3674.75,
        "stock": 8
    },
    {
        "id": "a6aba414-517d-43b5-b7e2-106756566f08",
        "title": "That Good Night",
        "isbnCode": "978669452520643",
        "author": "Marketta Breitenberg",
        "genre": "poetry",
        "yearOfPublication": "1946",
        "price": 2366.08,
        "stock": 18
    },
    {
        "id": "338efe14-2d2a-4f72-8f9d-fd05e206c57b",
        "title": "Mother Night",
        "isbnCode": "978059851943746",
        "author": "Brent Ebert",
        "genre": "friction",
        "yearOfPublication": "1958",
        "price": 4622.37,
        "stock": 3
    },
    {
        "id": "64230632-e030-4114-8e50-4ed3e985ab9d",
        "title": "The World, the Flesh and the Devil",
        "isbnCode": "978628172180673",
        "author": "Nathanael Blanda",
        "genre": "mystery",
        "yearOfPublication": "1980",
        "price": 2196.32,
        "stock": 18
    },
    {
        "id": "ddc699ea-daaa-4cb0-a894-567f4a5f9598",
        "title": "To Sail Beyond the Sunset",
        "isbnCode": "978463338233947",
        "author": "Melita Swaniawski",
        "genre": "mystery",
        "yearOfPublication": "1993",
        "price": 2243.98,
        "stock": 0
    },
    {
        "id": "377bb924-8ec0-4d5a-9354-5302d9ee1cbb",
        "title": "The Wealth of Nations",
        "isbnCode": "978278619619101",
        "author": "Jimmy Muller",
        "genre": "thriller",
        "yearOfPublication": "1959",
        "price": 3942.67,
        "stock": 10
    },
    {
        "id": "2018b3c8-d5fa-47ba-a303-5bcb38921f20",
        "title": "The Glory and the Dream",
        "isbnCode": "978716255862614",
        "author": "Yoko Daniel",
        "genre": "horror",
        "yearOfPublication": "2021",
        "price": 3714.22,
        "stock": 15
    },
    {
        "id": "65298557-3b5e-4264-be31-b32ccf9fcb7f",
        "title": "Oh! To be in England",
        "isbnCode": "978696759211286",
        "author": "Toya Mueller PhD",
        "genre": "mystery",
        "yearOfPublication": "2010",
        "price": 4286.40,
        "stock": 12
    },
    {
        "id": "2ddc0331-4f6d-44f0-a708-827d5eaea165",
        "title": "Far From the Madding Crowd",
        "isbnCode": "978410242513338",
        "author": "Lahoma Barrows",
        "genre": "thriller",
        "yearOfPublication": "1939",
        "price": 3256.31,
        "stock": 17
    },
    {
        "id": "8fa241b8-1399-4db6-9f27-7d75ad4ec884",
        "title": "Nectar in a Sieve",
        "isbnCode": "978309316348797",
        "author": "Evie Hagenes PhD",
        "genre": "horror",
        "yearOfPublication": "1974",
        "price": 3947.16,
        "stock": 18
    },
    {
        "id": "14accd16-808f-4704-ba9a-b5d34964d459",
        "title": "The Golden Bowl",
        "isbnCode": "978882008289195",
        "author": "Eliz Schneider",
        "genre": "thriller",
        "yearOfPublication": "1932",
        "price": 4806.73,
        "stock": 6
    },
    {
        "id": "051a6cbb-d466-48ad-8c48-050b856aa38e",
        "title": "The Grapes of Wrath",
        "isbnCode": "978163219990384",
        "author": "Marci Moore",
        "genre": "thriller",
        "yearOfPublication": "1988",
        "price": 3881.11,
        "stock": 6
    },
    {
        "id": "ce8810c0-c418-4d18-9012-caed404907d4",
        "title": "The Torment of Others",
        "isbnCode": "978850022467066",
        "author": "Salena Oberbrunner",
        "genre": "thriller",
        "yearOfPublication": "1977",
        "price": 4046.19,
        "stock": 1
    },
    {
        "id": "4ec54650-94dc-4ab5-8759-f0ea7b72407b",
        "title": "Ring of Bright Water",
        "isbnCode": "978158035219652",
        "author": "Glenn Hoppe I",
        "genre": "friction",
        "yearOfPublication": "1978",
        "price": 3381.42,
        "stock": 6
    },
    {
        "id": "5ac6dd7e-3a6b-4109-8fca-ee9ecc2cae69",
        "title": "The Glory and the Dream",
        "isbnCode": "978170594703656",
        "author": "Mr. Tessa Farrell",
        "genre": "mystery",
        "yearOfPublication": "1992",
        "price": 4616.39,
        "stock": 6
    },
    {
        "id": "a49a3c26-24b0-4c19-a7db-afca8e31f964",
        "title": "Alone on a Wide, Wide Sea",
        "isbnCode": "978060500629634",
        "author": "Dalia Schmidt DDS",
        "genre": "horror",
        "yearOfPublication": "1930",
        "price": 4276.01,
        "stock": 6
    },
    {
        "id": "09219865-c38b-43d7-8e67-2cabe059c189",
        "title": "Tender Is the Night",
        "isbnCode": "978883484106708",
        "author": "Travis Hane",
        "genre": "thriller",
        "yearOfPublication": "1960",
        "price": 3523.60,
        "stock": 17
    },
    {
        "id": "ba919a21-0ead-4eb6-914d-3c082997cd82",
        "title": "Jacob Have I Loved",
        "isbnCode": "978767683792095",
        "author": "Wilber Kris",
        "genre": "poetry",
        "yearOfPublication": "1931",
        "price": 2292.91,
        "stock": 0
    },
    {
        "id": "b6e8fe85-a609-429c-950b-8beb88cb6ba8",
        "title": "I Sing the Body Electric",
        "isbnCode": "978461685426014",
        "author": "Delpha Frami",
        "genre": "mystery",
        "yearOfPublication": "2013",
        "price": 4662.14,
        "stock": 3
    },
    {
        "id": "d1c850b8-debd-46ea-9b01-7447decc2da4",
        "title": "The Moon by Night",
        "isbnCode": "978766861610491",
        "author": "Celia Considine",
        "genre": "friction",
        "yearOfPublication": "1952",
        "price": 2152.71,
        "stock": 18
    },
    {
        "id": "bbf4c291-ebe3-4b54-9c92-bdbd2fab0d2b",
        "title": "The Wives of Bath",
        "isbnCode": "978301516674859",
        "author": "Wendy Schmitt",
        "genre": "poetry",
        "yearOfPublication": "1975",
        "price": 2606.49,
        "stock": 6
    },
    {
        "id": "fcb66068-f025-4eaf-ba90-0a3847b529b4",
        "title": "To a God Unknown",
        "isbnCode": "978817604933897",
        "author": "Donald Senger",
        "genre": "poetry",
        "yearOfPublication": "1997",
        "price": 4319.99,
        "stock": 16
    },
    {
        "id": "9a9ba7f6-8121-4023-8e0b-dd69bfc17d25",
        "title": "An Instant In The Wind",
        "isbnCode": "978552832461816",
        "author": "Lionel Breitenberg",
        "genre": "mystery",
        "yearOfPublication": "1980",
        "price": 3969.61,
        "stock": 4
    },
    {
        "id": "f25d7326-da4a-471e-88ad-b47af8a49c5d",
        "title": "The Heart Is Deceitful Above All Things",
        "isbnCode": "978100369667124",
        "author": "Roland Crist DVM",
        "genre": "thriller",
        "yearOfPublication": "1947",
        "price": 4537.49,
        "stock": 16
    },
    {
        "id": "47003155-3514-4813-874e-ebfdbd09a072",
        "title": "The Torment of Others",
        "isbnCode": "978555344531717",
        "author": "Malvina Feil",
        "genre": "horror",
        "yearOfPublication": "1961",
        "price": 4009.02,
        "stock": 14
    },
    {
        "id": "b2eab53b-6ac1-4b29-ab4f-a6eb228802c2",
        "title": "Absalom, Absalom!",
        "isbnCode": "978270854053748",
        "author": "Dwight Muller",
        "genre": "mystery",
        "yearOfPublication": "1937",
        "price": 4542.24,
        "stock": 2
    },
    {
        "id": "a6598f40-402c-44c6-b2da-64fba1a2258b",
        "title": "Blithe Spirit",
        "isbnCode": "978557984260112",
        "author": "Eldridge Schuster",
        "genre": "mystery",
        "yearOfPublication": "2009",
        "price": 2060.50,
        "stock": 13
    },
    {
        "id": "155ebf7d-097a-4911-bcc8-b34b859f53ca",
        "title": "Wildfire at Midnight",
        "isbnCode": "978329162521323",
        "author": "Jannet Heathcote",
        "genre": "thriller",
        "yearOfPublication": "1943",
        "price": 3802.39,
        "stock": 17
    },
    {
        "id": "c6a7c4da-d4c8-4f87-b2c6-a2aa4f6ab889",
        "title": "To a God Unknown",
        "isbnCode": "978565911440647",
        "author": "Glynis Lebsack MD",
        "genre": "mystery",
        "yearOfPublication": "2021",
        "price": 4585.38,
        "stock": 9
    },
    {
        "id": "bb8d12f4-2123-4967-9e85-c61b1c5735c6",
        "title": "Shall not Perish",
        "isbnCode": "978593199741104",
        "author": "Dane VonRueden",
        "genre": "mystery",
        "yearOfPublication": "2021",
        "price": 3789.52,
        "stock": 11
    },
    {
        "id": "fae51e82-5603-4694-afca-1f1af5e11fbc",
        "title": "The Green Bay Tree",
        "isbnCode": "978718355779688",
        "author": "Royal Goodwin",
        "genre": "thriller",
        "yearOfPublication": "1953",
        "price": 4235.71,
        "stock": 16
    },
    {
        "id": "58530005-f688-41bf-9fb1-ff1e5bdeeff5",
        "title": "Down to a Sunless Sea",
        "isbnCode": "978186579259080",
        "author": "Kenisha Robel",
        "genre": "thriller",
        "yearOfPublication": "2006",
        "price": 2439.19,
        "stock": 19
    },
    {
        "id": "79463677-1c46-4dd7-982f-eb8dd97673e3",
        "title": "No Country for Old Men",
        "isbnCode": "978115893203380",
        "author": "Numbers Glover",
        "genre": "thriller",
        "yearOfPublication": "1939",
        "price": 4559.27,
        "stock": 12
    },
    {
        "id": "35b442bb-0717-43a3-95e9-db127037b98c",
        "title": "From Here to Eternity",
        "isbnCode": "978945336332990",
        "author": "Douglas Wehner",
        "genre": "poetry",
        "yearOfPublication": "1999",
        "price": 3521.73,
        "stock": 2
    },
    {
        "id": "9ecb13db-b393-4f99-9fa7-f802d37eda7e",
        "title": "When the Green Woods Laugh",
        "isbnCode": "978344596956099",
        "author": "Deshawn Runolfsson",
        "genre": "poetry",
        "yearOfPublication": "1977",
        "price": 3516.43,
        "stock": 8
    },
    {
        "id": "1039fb2a-3f54-4ba7-8c6d-94345ef77ac6",
        "title": "Tirra Lirra by the River",
        "isbnCode": "978796301831570",
        "author": "Miss Zackary Runte",
        "genre": "mystery",
        "yearOfPublication": "1949",
        "price": 2250.93,
        "stock": 12
    },
    {
        "id": "37604764-dbaa-47d1-9530-325f7eb6aef7",
        "title": "An Instant In The Wind",
        "isbnCode": "978362915437698",
        "author": "Woodrow Brown",
        "genre": "thriller",
        "yearOfPublication": "1928",
        "price": 4989.32,
        "stock": 5
    },
    {
        "id": "807563a8-8fa4-48d3-8ac8-950bf71b8760",
        "title": "Tirra Lirra by the River",
        "isbnCode": "978586587400863",
        "author": "Pedro Runolfsdottir",
        "genre": "mystery",
        "yearOfPublication": "2021",
        "price": 3141.73,
        "stock": 5
    },
    {
        "id": "e1a179d7-8efb-46b9-8593-8f01c445e5ec",
        "title": "The Violent Bear It Away",
        "isbnCode": "978495458364422",
        "author": "Edison Jenkins",
        "genre": "horror",
        "yearOfPublication": "1998",
        "price": 3812.69,
        "stock": 19
    },
    {
        "id": "dc80779b-c4b9-4e7b-81df-725e8b58cc5f",
        "title": "A Time to Kill",
        "isbnCode": "978829305028005",
        "author": "Kirstin Pacocha",
        "genre": "mystery",
        "yearOfPublication": "1934",
        "price": 3893.23,
        "stock": 9
    },
    {
        "id": "1c91c036-6585-4c93-9bc0-336c7210dca7",
        "title": "For a Breath I Tarry",
        "isbnCode": "978132507369726",
        "author": "Macy Barrows",
        "genre": "thriller",
        "yearOfPublication": "1930",
        "price": 3472.88,
        "stock": 12
    },
    {
        "id": "e5ee565a-09f7-4aa8-8e9a-602a4e284b6c",
        "title": "O Pioneers!",
        "isbnCode": "978583801594665",
        "author": "Benton Powlowski V",
        "genre": "mystery",
        "yearOfPublication": "2012",
        "price": 3170.80,
        "stock": 13
    },
    {
        "id": "b0a5b8f8-c34c-4c67-88a8-744ec8fe0b3b",
        "title": "Clouds of Witness",
        "isbnCode": "978607441857056",
        "author": "Ms. Ling Bosco",
        "genre": "friction",
        "yearOfPublication": "1938",
        "price": 4613.54,
        "stock": 4
    },
    {
        "id": "2bed6fb7-9436-42d2-a9f5-9bf524f4c7c2",
        "title": "His Dark Materials",
        "isbnCode": "978320365883334",
        "author": "Constance Paucek",
        "genre": "poetry",
        "yearOfPublication": "1982",
        "price": 4974.28,
        "stock": 11
    },
    {
        "id": "a8a7627e-d6c0-43b1-ad7c-aab167fd355b",
        "title": "Blue Remembered Earth",
        "isbnCode": "978829810996004",
        "author": "Jaunita Graham",
        "genre": "poetry",
        "yearOfPublication": "1981",
        "price": 3968.15,
        "stock": 15
    },
    {
        "id": "e357b7c2-ed90-44de-80b6-2d43d8dcdefa",
        "title": "Where Angels Fear to Tread",
        "isbnCode": "978094854822842",
        "author": "Rickie Beer",
        "genre": "thriller",
        "yearOfPublication": "1974",
        "price": 4011.48,
        "stock": 10
    },
    {
        "id": "5f0751e1-95f0-4eee-ac41-27e09599bf2c",
        "title": "Beyond the Mexique Bay",
        "isbnCode": "978935622856376",
        "author": "Darin Balistreri",
        "genre": "poetry",
        "yearOfPublication": "1961",
        "price": 2593.75,
        "stock": 17
    },
    {
        "id": "ec9b5529-de31-4a00-8306-72db08c396be",
        "title": "After Many a Summer Dies the Swan",
        "isbnCode": "978761551926214",
        "author": "Sheilah Bradtke",
        "genre": "horror",
        "yearOfPublication": "1946",
        "price": 2141.44,
        "stock": 17
    },
    {
        "id": "d89eadce-52c2-4fac-ae0c-3532163850dc",
        "title": "The Violent Bear It Away",
        "isbnCode": "978656655920336",
        "author": "Solomon Schamberger Sr.",
        "genre": "poetry",
        "yearOfPublication": "2009",
        "price": 2899.30,
        "stock": 4
    },
    {
        "id": "abbd116d-cfc9-4e07-ad8f-995ef88dddc1",
        "title": "Tender Is the Night",
        "isbnCode": "978107502181677",
        "author": "Mr. Oleta Mitchell",
        "genre": "friction",
        "yearOfPublication": "1990",
        "price": 2246.79,
        "stock": 12
    },
    {
        "id": "d4850198-1d2a-4ff3-88fb-702042bfce68",
        "title": "Surprised by Joy",
        "isbnCode": "978351456265623",
        "author": "Marcy Borer",
        "genre": "thriller",
        "yearOfPublication": "1945",
        "price": 2510.02,
        "stock": 6
    },
    {
        "id": "aa208344-cfa4-4d87-a070-bd5f5f5cae34",
        "title": "The Daffodil Sky",
        "isbnCode": "978063223825915",
        "author": "Carly Ziemann Jr.",
        "genre": "friction",
        "yearOfPublication": "1989",
        "price": 2775.18,
        "stock": 14
    },
    {
        "id": "e19b0032-273c-4502-9d31-a6a0a735b916",
        "title": "The Glory and the Dream",
        "isbnCode": "978174764230382",
        "author": "Riley Toy",
        "genre": "poetry",
        "yearOfPublication": "1976",
        "price": 2841.96,
        "stock": 16
    },
    {
        "id": "0f30dc0b-66ae-491a-8d89-b24e9d25373d",
        "title": "If Not Now, When?",
        "isbnCode": "978877135285716",
        "author": "Dexter Kohler",
        "genre": "friction",
        "yearOfPublication": "1948",
        "price": 2635.48,
        "stock": 19
    },
    {
        "id": "b8270e4d-f8dc-4029-b648-a069e6d4a882",
        "title": "Dulce et Decorum Est",
        "isbnCode": "978677142716301",
        "author": "Kathyrn Shields DDS",
        "genre": "horror",
        "yearOfPublication": "1967",
        "price": 3456.94,
        "stock": 18
    },
    {
        "id": "55fd25d1-95cd-4796-b156-4924a2e22f59",
        "title": "Moab Is My Washpot",
        "isbnCode": "978740572144310",
        "author": "Domitila Towne",
        "genre": "friction",
        "yearOfPublication": "1976",
        "price": 2628.63,
        "stock": 6
    },
    {
        "id": "b22649b8-5ca6-4faa-b16b-39f1376a47cc",
        "title": "Such, Such Were the Joys",
        "isbnCode": "978830662536713",
        "author": "Delta McGlynn",
        "genre": "horror",
        "yearOfPublication": "1990",
        "price": 3690.07,
        "stock": 0
    },
    {
        "id": "3acfca16-ea9a-4fd4-8a17-620de9abe11d",
        "title": "Vile Bodies",
        "isbnCode": "978776999096054",
        "author": "Britt Armstrong PhD",
        "genre": "friction",
        "yearOfPublication": "1970",
        "price": 4989.81,
        "stock": 10
    },
    {
        "id": "f4a094b7-cc44-4042-8ead-50b6e70dc68f",
        "title": "The Waste Land",
        "isbnCode": "978717861114266",
        "author": "Lorna Moore",
        "genre": "friction",
        "yearOfPublication": "1973",
        "price": 2711.75,
        "stock": 12
    },
    {
        "id": "9f602740-28ae-4335-813f-f8443395683b",
        "title": "Death Be Not Proud",
        "isbnCode": "978435852091645",
        "author": "Roy Wunsch",
        "genre": "poetry",
        "yearOfPublication": "2022",
        "price": 3741.31,
        "stock": 9
    },
    {
        "id": "23113f19-da9d-4a5d-b484-15fa07515e27",
        "title": "Carrion Comfort",
        "isbnCode": "978489675219679",
        "author": "Miss Shanelle Beahan",
        "genre": "poetry",
        "yearOfPublication": "1966",
        "price": 4581.73,
        "stock": 8
    },
    {
        "id": "33b03ac6-bdb4-40b6-a106-3459fb467daa",
        "title": "O Jerusalem!",
        "isbnCode": "978406750291672",
        "author": "Homer Gleichner",
        "genre": "horror",
        "yearOfPublication": "1999",
        "price": 3350.25,
        "stock": 1
    },
    {
        "id": "d4823d91-31c3-4845-82e3-df44716319e1",
        "title": "Jesting Pilate",
        "isbnCode": "978572986987499",
        "author": "Deon Stracke",
        "genre": "thriller",
        "yearOfPublication": "2006",
        "price": 2196.00,
        "stock": 3
    },
    {
        "id": "576324ec-2bac-42bf-a0b8-d2e1fc109724",
        "title": "The Last Enemy",
        "isbnCode": "978206911009918",
        "author": "Waylon Rutherford",
        "genre": "horror",
        "yearOfPublication": "1982",
        "price": 2700.17,
        "stock": 4
    },
    {
        "id": "c8fec4e2-0f20-4fe9-a86e-c7f6601cc665",
        "title": "Quo Vadis",
        "isbnCode": "978257306493321",
        "author": "Mrs. Mariette Moen",
        "genre": "mystery",
        "yearOfPublication": "1972",
        "price": 3215.47,
        "stock": 0
    },
    {
        "id": "4933b008-c837-4518-a0ef-8eb7a44b2c4f",
        "title": "Blue Remembered Earth",
        "isbnCode": "978742064543441",
        "author": "Micah Shields",
        "genre": "friction",
        "yearOfPublication": "2010",
        "price": 2302.98,
        "stock": 0
    },
    {
        "id": "392db2dd-a0b0-4d36-a4f5-d3676c40e772",
        "title": "The Yellow Meads of Asphodel",
        "isbnCode": "978430054736696",
        "author": "Mr. Dave Williamson",
        "genre": "thriller",
        "yearOfPublication": "1970",
        "price": 4059.20,
        "stock": 11
    },
    {
        "id": "d50842be-4408-41a7-b0b4-6e37ebcdcc90",
        "title": "Things Fall Apart",
        "isbnCode": "978198377838874",
        "author": "Sook Stanton",
        "genre": "horror",
        "yearOfPublication": "1987",
        "price": 3861.20,
        "stock": 8
    },
    {
        "id": "88dfc645-26d0-45d1-85bf-1e30493a57f1",
        "title": "A Confederacy of Dunces",
        "isbnCode": "978462201448575",
        "author": "Mr. Eufemia Ward",
        "genre": "friction",
        "yearOfPublication": "1928",
        "price": 3329.37,
        "stock": 2
    },
    {
        "id": "a664c8ed-eb73-4b80-8061-15af93670ede",
        "title": "All Passion Spent",
        "isbnCode": "978145984582354",
        "author": "Odis Doyle",
        "genre": "thriller",
        "yearOfPublication": "1954",
        "price": 2604.85,
        "stock": 15
    },
    {
        "id": "f388442c-a40e-4e3c-8086-1b960571f5bc",
        "title": "Down to a Sunless Sea",
        "isbnCode": "978843724576618",
        "author": "Maryanna Morissette",
        "genre": "horror",
        "yearOfPublication": "2012",
        "price": 4784.68,
        "stock": 16
    },
    {
        "id": "175519f3-0fe3-4630-a7e7-9c657c916212",
        "title": "To Your Scattered Bodies Go",
        "isbnCode": "978508704362661",
        "author": "Miss Corinne Nienow",
        "genre": "horror",
        "yearOfPublication": "1940",
        "price": 2365.25,
        "stock": 17
    },
    {
        "id": "dc556fb0-4411-4553-b6a7-39a7a95af54e",
        "title": "Rosemary Sutcliff",
        "isbnCode": "978290143774601",
        "author": "Evelia Fahey",
        "genre": "poetry",
        "yearOfPublication": "1977",
        "price": 3163.26,
        "stock": 14
    },
    {
        "id": "ddfd3236-e7ef-4e3d-af21-06539d98d374",
        "title": "Beyond the Mexique Bay",
        "isbnCode": "978390150973885",
        "author": "Delta Will",
        "genre": "friction",
        "yearOfPublication": "1937",
        "price": 4769.35,
        "stock": 15
    },
    {
        "id": "2e14eb5d-49ae-4760-a9be-de6a2726729c",
        "title": "The Moving Finger",
        "isbnCode": "978849932993362",
        "author": "Ricky Metz",
        "genre": "poetry",
        "yearOfPublication": "1966",
        "price": 3940.87,
        "stock": 0
    },
    {
        "id": "293f4162-32c1-4865-bce5-277dc604ce14",
        "title": "Ego Dominus Tuus",
        "isbnCode": "978063980108427",
        "author": "Jeff Schaefer",
        "genre": "thriller",
        "yearOfPublication": "1962",
        "price": 2800.32,
        "stock": 19
    },
    {
        "id": "59d062f5-29ae-487d-86a3-fdeba4c9cc3d",
        "title": "The Green Bay Tree",
        "isbnCode": "978673481798395",
        "author": "Maybelle Heller",
        "genre": "poetry",
        "yearOfPublication": "1975",
        "price": 4086.31,
        "stock": 14
    },
    {
        "id": "90cd0850-89b7-48a2-a68b-ebf314baf72e",
        "title": "The Skull Beneath the Skin",
        "isbnCode": "978841154556813",
        "author": "Bert Durgan",
        "genre": "mystery",
        "yearOfPublication": "1935",
        "price": 4508.16,
        "stock": 3
    },
    {
        "id": "8359eb30-7acc-47fd-96c5-9db2e4cc2560",
        "title": "The Wealth of Nations",
        "isbnCode": "978361615314438",
        "author": "Hoa Casper",
        "genre": "thriller",
        "yearOfPublication": "1963",
        "price": 2045.25,
        "stock": 16
    },
    {
        "id": "e37a9e9f-179c-49ff-b98b-ce9b77c760e4",
        "title": "An Instant In The Wind",
        "isbnCode": "978480306234352",
        "author": "Mrs. Hong Mante",
        "genre": "thriller",
        "yearOfPublication": "1951",
        "price": 3186.07,
        "stock": 12
    },
    {
        "id": "62776fbf-2627-4af9-830d-50ad1e1ef475",
        "title": "The Golden Apples of the Sun",
        "isbnCode": "978210329358309",
        "author": "Hobert Wilderman",
        "genre": "poetry",
        "yearOfPublication": "1980",
        "price": 4287.74,
        "stock": 18
    },
    {
        "id": "e0818d03-bd48-45bd-a2f7-31406472197e",
        "title": "This Lime Tree Bower",
        "isbnCode": "978625113517493",
        "author": "Clinton Metz",
        "genre": "friction",
        "yearOfPublication": "1934",
        "price": 4655.42,
        "stock": 13
    },
    {
        "id": "ac48ee87-3b23-4ae2-9ff2-bf8be3ebd5af",
        "title": "Blithe Spirit",
        "isbnCode": "978865179077448",
        "author": "Shelia Dibbert",
        "genre": "thriller",
        "yearOfPublication": "1964",
        "price": 2629.89,
        "stock": 6
    },
    {
        "id": "559eed25-e199-4e66-83e0-9e0da302a373",
        "title": "The Parliament of Man",
        "isbnCode": "978889272383622",
        "author": "Boyce Leannon II",
        "genre": "horror",
        "yearOfPublication": "1996",
        "price": 3884.70,
        "stock": 3
    },
    {
        "id": "dc62a1ff-aa0f-44e7-bbaa-a1bf0c100d0c",
        "title": "Beneath the Bleeding",
        "isbnCode": "978852229742869",
        "author": "Miss Starr Feil",
        "genre": "friction",
        "yearOfPublication": "1946",
        "price": 2479.91,
        "stock": 12
    },
    {
        "id": "e2885ed3-a22f-4eb3-8c15-4eea19edd9ca",
        "title": "Nine Coaches Waiting",
        "isbnCode": "978485955000468",
        "author": "Dr. Andrea Klocko",
        "genre": "friction",
        "yearOfPublication": "2004",
        "price": 3679.69,
        "stock": 13
    },
    {
        "id": "6e5964ab-7a69-4855-b694-dd169c645d0f",
        "title": "For a Breath I Tarry",
        "isbnCode": "978383194605061",
        "author": "Steven Kulas V",
        "genre": "horror",
        "yearOfPublication": "2009",
        "price": 2519.82,
        "stock": 18
    },
    {
        "id": "f08a4453-f35e-4329-b69a-b12cbdbfd1ab",
        "title": "The Wives of Bath",
        "isbnCode": "978268441869952",
        "author": "Antonina Bode",
        "genre": "horror",
        "yearOfPublication": "2007",
        "price": 4532.97,
        "stock": 1
    },
    {
        "id": "baed6260-9047-48cb-95d9-2af9ef23d3b8",
        "title": "I Sing the Body Electric",
        "isbnCode": "978209004779050",
        "author": "Augustus Nitzsche MD",
        "genre": "poetry",
        "yearOfPublication": "1957",
        "price": 4203.75,
        "stock": 6
    },
    {
        "id": "c902da57-a3a8-4f88-b1c1-575310fcae38",
        "title": "A Confederacy of Dunces",
        "isbnCode": "978240982798093",
        "author": "France Huels",
        "genre": "mystery",
        "yearOfPublication": "1969",
        "price": 2792.46,
        "stock": 16
    },
    {
        "id": "ee149c4d-245f-459a-a54c-8035c7f46d3c",
        "title": "The Way of All Flesh",
        "isbnCode": "978490246955614",
        "author": "Basilia Barrows",
        "genre": "poetry",
        "yearOfPublication": "1935",
        "price": 4093.37,
        "stock": 3
    },
    {
        "id": "c3b2e347-26b2-4d98-8c6a-e3409fbd7aa4",
        "title": "Dance Dance Dance",
        "isbnCode": "978773677779946",
        "author": "Fritz Lubowitz",
        "genre": "horror",
        "yearOfPublication": "1927",
        "price": 2913.12,
        "stock": 15
    },
    {
        "id": "857e35d3-6eac-47aa-a0a5-160792f1651d",
        "title": "The Doors of Perception",
        "isbnCode": "978296145756837",
        "author": "Kenton Welch V",
        "genre": "mystery",
        "yearOfPublication": "1995",
        "price": 3501.74,
        "stock": 8
    },
    {
        "id": "fcec3942-859f-4584-81e3-071a63d5ae7a",
        "title": "Tiger! Tiger!",
        "isbnCode": "978805283129372",
        "author": "Ola Ullrich",
        "genre": "poetry",
        "yearOfPublication": "2015",
        "price": 2162.26,
        "stock": 13
    },
    {
        "id": "f4e26a47-bfa5-4af0-83e7-e24a839e1a75",
        "title": "In Dubious Battle",
        "isbnCode": "978197536427104",
        "author": "Howard Langosh DDS",
        "genre": "poetry",
        "yearOfPublication": "1938",
        "price": 2812.44,
        "stock": 12
    },
    {
        "id": "dd2a0f28-8cee-46a6-b4fb-c37528df3143",
        "title": "Nectar in a Sieve",
        "isbnCode": "978000762093787",
        "author": "Miss Homer Lubowitz",
        "genre": "mystery",
        "yearOfPublication": "1981",
        "price": 3118.14,
        "stock": 10
    },
    {
        "id": "64f2dd9b-8a4f-4c6f-a22a-630d685aff53",
        "title": "All Passion Spent",
        "isbnCode": "978308505606783",
        "author": "Anneliese Rath",
        "genre": "thriller",
        "yearOfPublication": "1973",
        "price": 2943.08,
        "stock": 17
    },
    {
        "id": "82913474-5d1f-407e-9800-39a23100d808",
        "title": "Paths of Glory",
        "isbnCode": "978050991463263",
        "author": "James Farrell",
        "genre": "thriller",
        "yearOfPublication": "1932",
        "price": 4366.20,
        "stock": 5
    },
    {
        "id": "35519675-e424-454d-ba38-229a267e36ff",
        "title": "The House of Mirth",
        "isbnCode": "978653984486625",
        "author": "Dr. Ralph Medhurst",
        "genre": "poetry",
        "yearOfPublication": "1937",
        "price": 4659.52,
        "stock": 4
    },
    {
        "id": "3168638b-2093-4b21-b2f7-e928ca2133f2",
        "title": "In a Dry Season",
        "isbnCode": "978542542812177",
        "author": "Chelsey Dickinson",
        "genre": "horror",
        "yearOfPublication": "1929",
        "price": 2985.25,
        "stock": 19
    },
    {
        "id": "62bc9da6-7020-4c0b-87a7-df12c3a5f050",
        "title": "The Lathe of Heaven",
        "isbnCode": "978961702593714",
        "author": "Maybelle Bernhard",
        "genre": "horror",
        "yearOfPublication": "2007",
        "price": 4864.01,
        "stock": 2
    },
    {
        "id": "f0dd3aa9-6070-4c12-9ad3-db7c57e26a70",
        "title": "Nectar in a Sieve",
        "isbnCode": "978257666359779",
        "author": "Racheal Johns",
        "genre": "mystery",
        "yearOfPublication": "1971",
        "price": 3668.39,
        "stock": 0
    },
    {
        "id": "bb99de21-9e76-4658-b8fc-f1e3599c7d42",
        "title": "I Know Why the Caged Bird Sings",
        "isbnCode": "978119134244725",
        "author": "Mrs. Morgan Bechtelar",
        "genre": "mystery",
        "yearOfPublication": "2011",
        "price": 3278.41,
        "stock": 4
    },
    {
        "id": "23590016-fbec-4863-8a95-2561866459f9",
        "title": "The House of Mirth",
        "isbnCode": "978081426813121",
        "author": "Darin Cronin",
        "genre": "mystery",
        "yearOfPublication": "1941",
        "price": 3269.85,
        "stock": 15
    },
    {
        "id": "803c9430-31b6-4856-908f-f3d39373b319",
        "title": "Far From the Madding Crowd",
        "isbnCode": "978151275609198",
        "author": "Janise Terry",
        "genre": "horror",
        "yearOfPublication": "1937",
        "price": 2122.84,
        "stock": 17
    },
    {
        "id": "d3ac1934-4750-4ca5-a888-9d64df655ea4",
        "title": "Blithe Spirit",
        "isbnCode": "978554962674324",
        "author": "Alvaro Vandervort",
        "genre": "horror",
        "yearOfPublication": "1966",
        "price": 4832.11,
        "stock": 1
    },
    {
        "id": "668e9da7-af52-45a4-8659-aa83c27b9932",
        "title": "A Swiftly Tilting Planet",
        "isbnCode": "978596516798112",
        "author": "Donnette Carroll",
        "genre": "horror",
        "yearOfPublication": "1994",
        "price": 2407.47,
        "stock": 15
    },
    {
        "id": "dd4080f6-90ca-409f-82b8-09cfde1b96b8",
        "title": "Now Sleeps the Crimson Petal",
        "isbnCode": "978439687051655",
        "author": "Cristina Orn",
        "genre": "thriller",
        "yearOfPublication": "1970",
        "price": 2840.56,
        "stock": 15
    },
    {
        "id": "bea90eda-9e54-4a62-9682-46774eee7bc1",
        "title": "Edna O'Brien",
        "isbnCode": "978204031631820",
        "author": "Marita Sipes",
        "genre": "friction",
        "yearOfPublication": "1949",
        "price": 4857.50,
        "stock": 5
    },
    {
        "id": "3669b2be-34b0-49c9-986e-1f95162def3e",
        "title": "The Heart Is a Lonely Hunter",
        "isbnCode": "978180381322466",
        "author": "Cristopher Herman",
        "genre": "friction",
        "yearOfPublication": "1948",
        "price": 3136.15,
        "stock": 11
    },
    {
        "id": "b3080b18-f698-4507-8178-5314d15d9929",
        "title": "Of Human Bondage",
        "isbnCode": "978809813766862",
        "author": "Alanna Renner",
        "genre": "poetry",
        "yearOfPublication": "2015",
        "price": 4144.85,
        "stock": 13
    },
    {
        "id": "166a1d77-fc41-42d1-a087-98e023333654",
        "title": "The Doors of Perception",
        "isbnCode": "978756287138995",
        "author": "Estelle Carter",
        "genre": "horror",
        "yearOfPublication": "1957",
        "price": 2344.66,
        "stock": 19
    },
    {
        "id": "1dc7c16a-7b52-430c-a405-c63adef267ab",
        "title": "Things Fall Apart",
        "isbnCode": "978283763096034",
        "author": "Dr. Sanda Marquardt",
        "genre": "thriller",
        "yearOfPublication": "1928",
        "price": 4635.68,
        "stock": 7
    },
    {
        "id": "a3c45039-2edb-45ae-ae9d-1755923d3f2e",
        "title": "Where Angels Fear to Tread",
        "isbnCode": "978363977190369",
        "author": "Darin Bogan",
        "genre": "horror",
        "yearOfPublication": "1967",
        "price": 4180.29,
        "stock": 11
    },
    {
        "id": "8151f9f5-ac6d-4329-9f6f-11fc42bd2edb",
        "title": "The Moving Toyshop",
        "isbnCode": "978923681464683",
        "author": "Elmer Yost III",
        "genre": "mystery",
        "yearOfPublication": "1932",
        "price": 2872.54,
        "stock": 16
    },
    {
        "id": "aba8eb85-03b7-4e64-8b07-b4b9fa572626",
        "title": "Great Work of Time",
        "isbnCode": "978237737469564",
        "author": "Zackary Koepp",
        "genre": "poetry",
        "yearOfPublication": "1985",
        "price": 4491.54,
        "stock": 16
    },
    {
        "id": "68ebaa05-7174-405d-b855-8b3a9af20a5c",
        "title": "Consider the Lilies",
        "isbnCode": "978073113338203",
        "author": "Noriko Leffler",
        "genre": "poetry",
        "yearOfPublication": "1936",
        "price": 2158.64,
        "stock": 10
    },
    {
        "id": "d281ebd1-dacc-4cf6-8c58-49b7a8468c17",
        "title": "Beyond the Mexique Bay",
        "isbnCode": "978669474080664",
        "author": "Daniel Schumm",
        "genre": "thriller",
        "yearOfPublication": "2014",
        "price": 2542.57,
        "stock": 3
    },
    {
        "id": "1e73f058-7950-4c15-ba62-eee9b5ecfc55",
        "title": "Jesting Pilate",
        "isbnCode": "978097398508475",
        "author": "Bulah Abernathy",
        "genre": "mystery",
        "yearOfPublication": "1981",
        "price": 2751.72,
        "stock": 16
    },
    {
        "id": "add40072-0d2f-4672-964d-3f9453365207",
        "title": "Fear and Trembling",
        "isbnCode": "978957510048023",
        "author": "Odis Howe I",
        "genre": "horror",
        "yearOfPublication": "1944",
        "price": 3764.17,
        "stock": 4
    },
    {
        "id": "7d8281bb-8d7f-4703-a490-14844a59178a",
        "title": "All Passion Spent",
        "isbnCode": "978100242098330",
        "author": "Ian Walker",
        "genre": "poetry",
        "yearOfPublication": "1979",
        "price": 2138.42,
        "stock": 4
    },
    {
        "id": "49a3be91-d5e2-4839-a46b-3feea467cfa9",
        "title": "This Side of Paradise",
        "isbnCode": "978814087013314",
        "author": "Miss Sidney Hegmann",
        "genre": "thriller",
        "yearOfPublication": "2010",
        "price": 2401.43,
        "stock": 12
    },
    {
        "id": "96da9be9-da0a-4bc4-964f-b003f80381ab",
        "title": "The Other Side of Silence",
        "isbnCode": "978607466007754",
        "author": "Lydia Gutmann",
        "genre": "poetry",
        "yearOfPublication": "1958",
        "price": 3192.13,
        "stock": 3
    },
    {
        "id": "ae21de04-d8ae-4a2b-ab20-4bf079f6a4f3",
        "title": "Vanity Fair",
        "isbnCode": "978007036424410",
        "author": "Miss Danuta Schmeler",
        "genre": "friction",
        "yearOfPublication": "1979",
        "price": 3683.63,
        "stock": 17
    },
    {
        "id": "ac7d354f-6492-4d70-87b3-8653175a0656",
        "title": "The Waste Land",
        "isbnCode": "978279629753546",
        "author": "Albertine Konopelski",
        "genre": "mystery",
        "yearOfPublication": "2014",
        "price": 2797.13,
        "stock": 12
    },
    {
        "id": "67d50ce7-3a7d-48b8-853c-c22d77d29c82",
        "title": "Jesting Pilate",
        "isbnCode": "978096548725202",
        "author": "Lahoma Murazik",
        "genre": "friction",
        "yearOfPublication": "1998",
        "price": 4792.32,
        "stock": 7
    },
    {
        "id": "3d1f67b6-0b44-40ae-8f33-4ab66b7f1dbf",
        "title": "The Skull Beneath the Skin",
        "isbnCode": "978281789403474",
        "author": "Roseanna Bayer",
        "genre": "horror",
        "yearOfPublication": "1970",
        "price": 3657.41,
        "stock": 4
    },
    {
        "id": "be067da4-3391-4926-95ad-77b09e1599dd",
        "title": "Everything is Illuminated",
        "isbnCode": "978490428629776",
        "author": "Sean Feil",
        "genre": "horror",
        "yearOfPublication": "1935",
        "price": 2908.17,
        "stock": 18
    },
    {
        "id": "830d7753-3a46-4486-aa76-cb5bb15b8096",
        "title": "O Pioneers!",
        "isbnCode": "978340759219384",
        "author": "Maximo Abbott",
        "genre": "horror",
        "yearOfPublication": "2022",
        "price": 4016.21,
        "stock": 15
    },
    {
        "id": "85eb364c-c567-4ecd-9079-3297dcdea0e9",
        "title": "Taming a Sea Horse",
        "isbnCode": "978090982275760",
        "author": "Sanford Douglas Sr.",
        "genre": "thriller",
        "yearOfPublication": "1984",
        "price": 2430.80,
        "stock": 8
    },
    {
        "id": "1f06bf09-a1f7-4fae-8b4f-2b81b1757f14",
        "title": "The Wealth of Nations",
        "isbnCode": "978065820173058",
        "author": "Toni Stroman I",
        "genre": "friction",
        "yearOfPublication": "1939",
        "price": 3428.94,
        "stock": 17
    },
    {
        "id": "8f28ff8a-3935-40f6-bf4d-293d1b776233",
        "title": "Endless Night",
        "isbnCode": "978391361341603",
        "author": "Sheilah Gibson",
        "genre": "mystery",
        "yearOfPublication": "1966",
        "price": 3666.33,
        "stock": 15
    },
    {
        "id": "4f0ea438-1d48-49d9-8960-9a933c53964f",
        "title": "The Daffodil Sky",
        "isbnCode": "978914438967967",
        "author": "Ricky Littel PhD",
        "genre": "mystery",
        "yearOfPublication": "2013",
        "price": 3776.79,
        "stock": 6
    },
    {
        "id": "6b56f676-84d9-4714-b535-73c87ddd23b7",
        "title": "For Whom the Bell Tolls",
        "isbnCode": "978452035525483",
        "author": "Esteban Mueller",
        "genre": "friction",
        "yearOfPublication": "1998",
        "price": 3376.23,
        "stock": 17
    },
    {
        "id": "6a631cf0-f091-4c67-9ad0-0ed06868bf61",
        "title": "An Instant In The Wind",
        "isbnCode": "978591439474272",
        "author": "Meri Leannon",
        "genre": "thriller",
        "yearOfPublication": "2014",
        "price": 4536.94,
        "stock": 9
    },
    {
        "id": "c3edb655-d46b-4752-b3e5-7c374652bc6e",
        "title": "The Heart Is a Lonely Hunter",
        "isbnCode": "978339659804527",
        "author": "Siobhan Marvin",
        "genre": "poetry",
        "yearOfPublication": "1983",
        "price": 3248.05,
        "stock": 0
    },
    {
        "id": "d0f28348-60ed-492f-b5e9-d59bd3687c93",
        "title": "Vile Bodies",
        "isbnCode": "978035125449679",
        "author": "Stanley Green",
        "genre": "mystery",
        "yearOfPublication": "1946",
        "price": 2994.73,
        "stock": 7
    },
    {
        "id": "cda4be70-4568-4651-a9f4-e34f8ba130eb",
        "title": "Antic Hay",
        "isbnCode": "978615755413569",
        "author": "Wanita Runte II",
        "genre": "poetry",
        "yearOfPublication": "2019",
        "price": 4079.77,
        "stock": 8
    },
    {
        "id": "bc1607b5-25b0-44cf-85e4-959c3451ee90",
        "title": "The Glory and the Dream",
        "isbnCode": "978699049138687",
        "author": "Chloe Mayer",
        "genre": "friction",
        "yearOfPublication": "2017",
        "price": 2007.79,
        "stock": 4
    },
    {
        "id": "37eca1e0-bbfe-4d50-a627-38778923449a",
        "title": "The Painted Veil",
        "isbnCode": "978676741367543",
        "author": "Aubrey Mayert",
        "genre": "thriller",
        "yearOfPublication": "1983",
        "price": 3600.95,
        "stock": 18
    },
    {
        "id": "eacebfed-cee4-480a-ae9a-dd3b774baa26",
        "title": "An Instant In The Wind",
        "isbnCode": "978884385620756",
        "author": "Cora Schinner",
        "genre": "mystery",
        "yearOfPublication": "1990",
        "price": 3837.14,
        "stock": 13
    },
    {
        "id": "4dff366f-78e8-4e4e-bc47-8e22ccbdf2a5",
        "title": "The Way Through the Woods",
        "isbnCode": "978158957567197",
        "author": "Rickie Jacobi V",
        "genre": "horror",
        "yearOfPublication": "2021",
        "price": 3849.08,
        "stock": 1
    },
    {
        "id": "52bd2b13-af35-40a6-aa87-3fdcf3d1e357",
        "title": "Now Sleeps the Crimson Petal",
        "isbnCode": "978582872806850",
        "author": "Geoffrey Heaney",
        "genre": "poetry",
        "yearOfPublication": "1992",
        "price": 2743.63,
        "stock": 14
    },
    {
        "id": "dfe59059-003e-43a9-8183-407f76c06a2a",
        "title": "Taming a Sea Horse",
        "isbnCode": "978100399549714",
        "author": "Alfred Stark",
        "genre": "horror",
        "yearOfPublication": "1981",
        "price": 4752.93,
        "stock": 5
    },
    {
        "id": "dd4f8249-d8cd-4c77-9b15-69845e9f3d75",
        "title": "In Death Ground",
        "isbnCode": "978024737956925",
        "author": "Terra Homenick",
        "genre": "friction",
        "yearOfPublication": "1995",
        "price": 3455.33,
        "stock": 7
    },
    {
        "id": "fb189f1f-2e9c-4a2c-8ac1-7a93d63d95a7",
        "title": "The Far-Distant Oxus",
        "isbnCode": "978761601061726",
        "author": "Mrs. Jackie Will",
        "genre": "horror",
        "yearOfPublication": "1984",
        "price": 2850.54,
        "stock": 10
    },
    {
        "id": "9feec064-baa5-456b-9aee-f3204524a64a",
        "title": "The Parliament of Man",
        "isbnCode": "978196763729144",
        "author": "Stefany Abshire",
        "genre": "horror",
        "yearOfPublication": "1924",
        "price": 3392.39,
        "stock": 10
    },
    {
        "id": "55a234c4-2e55-4cc4-8311-51438478834f",
        "title": "Behold the Man",
        "isbnCode": "978414199511291",
        "author": "Norbert Cruickshank",
        "genre": "thriller",
        "yearOfPublication": "2016",
        "price": 2548.07,
        "stock": 13
    },
    {
        "id": "5403eca7-b1db-46f5-b40d-2fcd7cdfbb46",
        "title": "An Instant In The Wind",
        "isbnCode": "978026434175330",
        "author": "Avis Ritchie",
        "genre": "horror",
        "yearOfPublication": "1934",
        "price": 2238.65,
        "stock": 6
    },
    {
        "id": "f56b35a4-41e9-4cf7-8e90-1385b2ce9031",
        "title": "In Dubious Battle",
        "isbnCode": "978013216115492",
        "author": "Mrs. Brock Lowe",
        "genre": "horror",
        "yearOfPublication": "1964",
        "price": 4347.69,
        "stock": 19
    },
    {
        "id": "bcc7dd94-b5d1-4e49-9d37-80cf888fc72d",
        "title": "Blood's a Rover",
        "isbnCode": "978374949799207",
        "author": "Cyrus Thiel",
        "genre": "thriller",
        "yearOfPublication": "1960",
        "price": 3879.58,
        "stock": 8
    },
    {
        "id": "2ad380c1-c1f9-4419-945e-bdfba52479c8",
        "title": "Consider the Lilies",
        "isbnCode": "978796399702918",
        "author": "Erminia Larkin Sr.",
        "genre": "friction",
        "yearOfPublication": "1939",
        "price": 2991.38,
        "stock": 4
    },
    {
        "id": "6af26789-088d-41a7-b51f-117a52c4e353",
        "title": "The Needle's Eye",
        "isbnCode": "978784386108411",
        "author": "Allan Kerluke IV",
        "genre": "mystery",
        "yearOfPublication": "1988",
        "price": 2268.68,
        "stock": 18
    },
    {
        "id": "50afb54e-7d16-4a4b-ab73-da91b4aea1d9",
        "title": "Beyond the Mexique Bay",
        "isbnCode": "978108394324568",
        "author": "Dr. Mike Deckow",
        "genre": "poetry",
        "yearOfPublication": "1984",
        "price": 3519.48,
        "stock": 9
    },
    {
        "id": "e3f34b36-9f43-44db-83bd-805eafdacf1e",
        "title": "The Cricket on the Hearth",
        "isbnCode": "978429280948080",
        "author": "Dr. Tamra Flatley",
        "genre": "horror",
        "yearOfPublication": "1998",
        "price": 4801.18,
        "stock": 18
    },
    {
        "id": "b18f0702-6fbf-4b7c-ba1a-eadaab530492",
        "title": "A Summer Bird-Cage",
        "isbnCode": "978738500696724",
        "author": "Kirk Dickinson",
        "genre": "thriller",
        "yearOfPublication": "1954",
        "price": 3554.31,
        "stock": 13
    },
    {
        "id": "677f5896-643f-4de1-a60d-7cbfddbe163b",
        "title": "The Grapes of Wrath",
        "isbnCode": "978605674059976",
        "author": "Chi Mills",
        "genre": "horror",
        "yearOfPublication": "1954",
        "price": 3980.74,
        "stock": 13
    },
    {
        "id": "c73b6183-3584-4cf5-934a-e9e1d63c6db1",
        "title": "The Last Enemy",
        "isbnCode": "978487047943532",
        "author": "Jacob Kohler I",
        "genre": "poetry",
        "yearOfPublication": "2014",
        "price": 2813.58,
        "stock": 8
    },
    {
        "id": "6668e851-93f6-4c82-9325-a46bcd73cd52",
        "title": "A Time to Kill",
        "isbnCode": "978535741342620",
        "author": "Adrian Jacobi",
        "genre": "friction",
        "yearOfPublication": "2014",
        "price": 3370.13,
        "stock": 0
    },
    {
        "id": "6dd0bfc5-6937-4bee-9f69-12470736c4ea",
        "title": "Vanity Fair",
        "isbnCode": "978384689428226",
        "author": "Rocco Hettinger",
        "genre": "thriller",
        "yearOfPublication": "1993",
        "price": 4358.29,
        "stock": 0
    },
    {
        "id": "0d6c49a1-79ac-40ed-a806-8795477cf071",
        "title": "As I Lay Dying",
        "isbnCode": "978078213599922",
        "author": "Cesar Baumbach",
        "genre": "thriller",
        "yearOfPublication": "1931",
        "price": 4963.06,
        "stock": 10
    },
    {
        "id": "f10f6186-6189-4cbd-a8af-e0e0a53cd183",
        "title": "I Will Fear No Evil",
        "isbnCode": "978071346916975",
        "author": "Walker Abernathy",
        "genre": "friction",
        "yearOfPublication": "1971",
        "price": 4743.53,
        "stock": 7
    },
    {
        "id": "334e2458-ca86-4946-a78f-353a4f07e5f8",
        "title": "Mother Night",
        "isbnCode": "978333437592391",
        "author": "Jordon Gusikowski",
        "genre": "poetry",
        "yearOfPublication": "1958",
        "price": 4213.75,
        "stock": 12
    },
    {
        "id": "cdf053b7-c9d9-497c-9253-fe5c3ff104a6",
        "title": "The Wealth of Nations",
        "isbnCode": "978399125001702",
        "author": "Numbers Jenkins",
        "genre": "thriller",
        "yearOfPublication": "2019",
        "price": 3043.04,
        "stock": 14
    },
    {
        "id": "b1006cc9-93e1-47ce-8ecf-adf68b5e0c21",
        "title": "Infinite Jest",
        "isbnCode": "978393729262465",
        "author": "Mika Robel III",
        "genre": "horror",
        "yearOfPublication": "2021",
        "price": 2207.13,
        "stock": 18
    },
    {
        "id": "67377b52-f7e7-4268-9b6a-b0f3b9191230",
        "title": "To Sail Beyond the Sunset",
        "isbnCode": "978551341413521",
        "author": "Renae Stehr Sr.",
        "genre": "friction",
        "yearOfPublication": "1985",
        "price": 3638.16,
        "stock": 5
    },
    {
        "id": "76a040f1-ef33-4692-b602-acdbc3bbc081",
        "title": "In Dubious Battle",
        "isbnCode": "978618275501873",
        "author": "Jenice Swaniawski",
        "genre": "poetry",
        "yearOfPublication": "2006",
        "price": 3990.25,
        "stock": 4
    },
    {
        "id": "808e03d9-356f-45d6-a846-1cc6e9d1f3eb",
        "title": "A Farewell to Arms",
        "isbnCode": "978162135480982",
        "author": "Wilford Johns",
        "genre": "poetry",
        "yearOfPublication": "2001",
        "price": 3906.92,
        "stock": 0
    },
    {
        "id": "9ca501cd-f532-4bf0-aca6-d56255fbffb6",
        "title": "Noli Me Tangere",
        "isbnCode": "978094698786533",
        "author": "Earlean Jones Sr.",
        "genre": "friction",
        "yearOfPublication": "1960",
        "price": 4020.70,
        "stock": 11
    },
    {
        "id": "a00b61b6-6c5d-431c-a005-34cd0e7a0aea",
        "title": "It's a Battlefield",
        "isbnCode": "978582045729436",
        "author": "Nannie Dickens",
        "genre": "thriller",
        "yearOfPublication": "1996",
        "price": 4459.90,
        "stock": 18
    },
    {
        "id": "fbf08340-967a-4303-9371-34d3c87d86a9",
        "title": "Far From the Madding Crowd",
        "isbnCode": "978247856805333",
        "author": "Mr. Efrain Ruecker",
        "genre": "thriller",
        "yearOfPublication": "1967",
        "price": 4075.79,
        "stock": 19
    },
    {
        "id": "c5007e93-f010-4e8c-8e91-bc09feb5f4e5",
        "title": "The Mermaids Singing",
        "isbnCode": "978396474706208",
        "author": "Guillermina Casper",
        "genre": "friction",
        "yearOfPublication": "1997",
        "price": 3517.69,
        "stock": 19
    },
    {
        "id": "4587cff9-8706-4ad2-bd07-70bc30a5eb30",
        "title": "Fear and Trembling",
        "isbnCode": "978626965888196",
        "author": "Cristal Douglas",
        "genre": "horror",
        "yearOfPublication": "2002",
        "price": 4535.49,
        "stock": 2
    },
    {
        "id": "d820b88f-cf18-42ec-8fdb-fdd9d8a806d8",
        "title": "From Here to Eternity",
        "isbnCode": "978187577003218",
        "author": "Jeanie Emard Jr.",
        "genre": "mystery",
        "yearOfPublication": "1934",
        "price": 2425.57,
        "stock": 6
    },
    {
        "id": "bf98fd83-9bc9-4dae-8970-e088acc5a48a",
        "title": "A Catskill Eagle",
        "isbnCode": "978417962227980",
        "author": "Guadalupe Gerlach",
        "genre": "thriller",
        "yearOfPublication": "1935",
        "price": 2267.71,
        "stock": 0
    },
    {
        "id": "7d38c6bf-fd51-4c95-a8b5-d32b17ea92e4",
        "title": "Far From the Madding Crowd",
        "isbnCode": "978153430787712",
        "author": "Carmen Okuneva",
        "genre": "poetry",
        "yearOfPublication": "1982",
        "price": 4049.96,
        "stock": 19
    },
    {
        "id": "638a042b-4d39-42b4-a237-0612f718acbb",
        "title": "Cover Her Face",
        "isbnCode": "978775266191938",
        "author": "Suellen Maggio",
        "genre": "thriller",
        "yearOfPublication": "1951",
        "price": 3381.44,
        "stock": 19
    },
    {
        "id": "ecae2f53-80e3-4154-aeb3-f2c112eb1cf1",
        "title": "A Many-Splendoured Thing",
        "isbnCode": "978156962856320",
        "author": "Mao Smith",
        "genre": "friction",
        "yearOfPublication": "2010",
        "price": 4476.79,
        "stock": 10
    },
    {
        "id": "cc8607ff-4f22-441d-aa9b-9774ca0f0b05",
        "title": "Dying of the Light",
        "isbnCode": "978689876634981",
        "author": "Mr. Anisa Koepp",
        "genre": "horror",
        "yearOfPublication": "1955",
        "price": 2957.64,
        "stock": 3
    },
    {
        "id": "31ecbc66-f0d0-4655-bc4e-c2909b848e8b",
        "title": "Jacob Have I Loved",
        "isbnCode": "978098841428330",
        "author": "Fred Kemmer MD",
        "genre": "mystery",
        "yearOfPublication": "1953",
        "price": 3445.68,
        "stock": 10
    },
    {
        "id": "cf192865-912e-4422-a2d8-18c3af27f150",
        "title": "The Man Within",
        "isbnCode": "978706951143042",
        "author": "Mrs. Chelsie Rodriguez",
        "genre": "poetry",
        "yearOfPublication": "1932",
        "price": 2887.20,
        "stock": 6
    },
    {
        "id": "a3480eb0-a5ed-4d32-b65e-cf18e7321876",
        "title": "Dulce et Decorum Est",
        "isbnCode": "978272805145258",
        "author": "Maxwell Corwin",
        "genre": "friction",
        "yearOfPublication": "1972",
        "price": 3280.36,
        "stock": 5
    },
    {
        "id": "31a31878-6540-42c2-8aba-0fbfa35eadd9",
        "title": "The Far-Distant Oxus",
        "isbnCode": "978696839913224",
        "author": "Bryant Farrell",
        "genre": "thriller",
        "yearOfPublication": "1957",
        "price": 4854.95,
        "stock": 9
    },
    {
        "id": "40884b1f-d345-4c87-9f8d-99259cb4a71d",
        "title": "Everything is Illuminated",
        "isbnCode": "978015964454916",
        "author": "Mrs. Julene Green",
        "genre": "thriller",
        "yearOfPublication": "1966",
        "price": 4225.83,
        "stock": 16
    },
    {
        "id": "47f5b583-4237-4066-ad8d-c713a4138498",
        "title": "The Torment of Others",
        "isbnCode": "978385690113974",
        "author": "Lyman Kunde",
        "genre": "friction",
        "yearOfPublication": "1992",
        "price": 3919.54,
        "stock": 12
    },
    {
        "id": "8f3e4056-e2f4-4749-8805-e3b89195ec6f",
        "title": "What's Become of Waring",
        "isbnCode": "978459093068968",
        "author": "Gilbert Anderson",
        "genre": "friction",
        "yearOfPublication": "2011",
        "price": 4070.81,
        "stock": 5
    },
    {
        "id": "b1648cb9-7a43-468e-9f3c-ae8f36e7d135",
        "title": "The Proper Study",
        "isbnCode": "978652746745508",
        "author": "Shawnda O'Hara",
        "genre": "poetry",
        "yearOfPublication": "1983",
        "price": 2393.36,
        "stock": 2
    },
    {
        "id": "eb4a3cb0-63f3-4ee4-a288-02233963fdf5",
        "title": "Ring of Bright Water",
        "isbnCode": "978547984391064",
        "author": "Erasmo Walter PhD",
        "genre": "thriller",
        "yearOfPublication": "1976",
        "price": 2101.53,
        "stock": 6
    },
    {
        "id": "22bca380-f36f-42ac-a75f-d201773db9ef",
        "title": "Of Mice and Men",
        "isbnCode": "978219581065667",
        "author": "Hedy Shanahan",
        "genre": "poetry",
        "yearOfPublication": "1992",
        "price": 3052.44,
        "stock": 14
    },
    {
        "id": "4388027f-4acb-41ad-89e0-9855223c97bc",
        "title": "Oh! To be in England",
        "isbnCode": "978819738993071",
        "author": "Darren Hegmann",
        "genre": "thriller",
        "yearOfPublication": "1933",
        "price": 2079.21,
        "stock": 4
    },
    {
        "id": "22f92118-a496-4656-b82f-a9b8136841c8",
        "title": "Frequent Hearses",
        "isbnCode": "978064916564593",
        "author": "Leigha Murray",
        "genre": "friction",
        "yearOfPublication": "1969",
        "price": 4644.58,
        "stock": 9
    },
    {
        "id": "28127c7b-c5f5-43a1-9632-a4c96938d07a",
        "title": "Butter In a Lordly Dish",
        "isbnCode": "978251125564513",
        "author": "Sheridan Skiles",
        "genre": "horror",
        "yearOfPublication": "1987",
        "price": 4139.59,
        "stock": 11
    },
    {
        "id": "6c340fac-8e93-4b7b-a8e3-afc8bcd189f7",
        "title": "East of Eden",
        "isbnCode": "978895931767747",
        "author": "Louanne Zieme Sr.",
        "genre": "friction",
        "yearOfPublication": "1968",
        "price": 4036.32,
        "stock": 3
    },
    {
        "id": "cf59b155-5012-44b2-a9ee-9cfb4dd63a3c",
        "title": "I Will Fear No Evil",
        "isbnCode": "978533835360928",
        "author": "Mrs. Phil Kreiger",
        "genre": "thriller",
        "yearOfPublication": "1981",
        "price": 2463.78,
        "stock": 5
    },
    {
        "id": "510d9b35-2200-4d30-9d7c-bf9df36b6034",
        "title": "Of Mice and Men",
        "isbnCode": "978136312163722",
        "author": "Ms. Markus Emmerich",
        "genre": "friction",
        "yearOfPublication": "2015",
        "price": 2445.82,
        "stock": 4
    },
    {
        "id": "dcbf8065-4c6c-4869-94eb-f35c04c29a27",
        "title": "Antic Hay",
        "isbnCode": "978087307471821",
        "author": "Krystle O'Hara",
        "genre": "horror",
        "yearOfPublication": "1937",
        "price": 4615.56,
        "stock": 11
    },
    {
        "id": "532c1064-c014-42b8-ac99-3d0e2ac745b3",
        "title": "To Sail Beyond the Sunset",
        "isbnCode": "978948924842904",
        "author": "Mariella Stark",
        "genre": "poetry",
        "yearOfPublication": "2022",
        "price": 3087.37,
        "stock": 13
    },
    {
        "id": "8f7edb1e-c34b-4c67-b8c9-7e9c10135268",
        "title": "Infinite Jest",
        "isbnCode": "978492794111890",
        "author": "Clair Gaylord",
        "genre": "friction",
        "yearOfPublication": "2019",
        "price": 4587.03,
        "stock": 5
    },
    {
        "id": "47cff0c7-1e29-4f02-8c1c-1ba4c166d253",
        "title": "As I Lay Dying",
        "isbnCode": "978651521720611",
        "author": "Miguel Tremblay",
        "genre": "poetry",
        "yearOfPublication": "1942",
        "price": 3742.21,
        "stock": 4
    },
    {
        "id": "ce49e6de-87ec-4f0d-9ad9-90aedf318ff0",
        "title": "Such, Such Were the Joys",
        "isbnCode": "978322565737722",
        "author": "Rene Okuneva Sr.",
        "genre": "mystery",
        "yearOfPublication": "1932",
        "price": 4950.81,
        "stock": 10
    },
    {
        "id": "b08d35a9-9f44-4a5c-91c0-aa47acb0648e",
        "title": "As I Lay Dying",
        "isbnCode": "978926001460106",
        "author": "Dr. Chantell Cormier",
        "genre": "horror",
        "yearOfPublication": "2015",
        "price": 2334.41,
        "stock": 12
    },
    {
        "id": "17d66edc-e6ec-49dd-90d7-d086270a2b81",
        "title": "If I Forget Thee Jerusalem",
        "isbnCode": "978700131840882",
        "author": "Casey Nienow",
        "genre": "thriller",
        "yearOfPublication": "1972",
        "price": 3622.77,
        "stock": 4
    },
    {
        "id": "0ff9be28-cc9d-45e1-b247-8af26d38e739",
        "title": "Brandy of the Damned",
        "isbnCode": "978800476868543",
        "author": "Miss Booker Cole",
        "genre": "thriller",
        "yearOfPublication": "1956",
        "price": 3279.18,
        "stock": 1
    },
    {
        "id": "fd5f75f5-54d0-45be-a2b6-4c9eba553592",
        "title": "If I Forget Thee Jerusalem",
        "isbnCode": "978598560042571",
        "author": "Kyle Senger Sr.",
        "genre": "poetry",
        "yearOfPublication": "2016",
        "price": 3879.15,
        "stock": 8
    },
    {
        "id": "39155e23-d3b3-44e1-a96d-64f0935d53df",
        "title": "The Golden Apples of the Sun",
        "isbnCode": "978302031431569",
        "author": "Miss Rolland Brakus",
        "genre": "mystery",
        "yearOfPublication": "1926",
        "price": 4984.44,
        "stock": 11
    },
    {
        "id": "0cfcfa4e-df9b-45d5-b9a2-c22515191b99",
        "title": "The Painted Veil",
        "isbnCode": "978577666312723",
        "author": "Darryl Ondricka",
        "genre": "thriller",
        "yearOfPublication": "1975",
        "price": 3563.55,
        "stock": 0
    },
    {
        "id": "949ac0f2-e348-4b04-937b-6833b39400d6",
        "title": "Endless Night",
        "isbnCode": "978968019039213",
        "author": "Bart Friesen",
        "genre": "thriller",
        "yearOfPublication": "2011",
        "price": 3059.05,
        "stock": 3
    },
    {
        "id": "d4e60dc1-b778-4ed0-8066-3dbd791678c9",
        "title": "A Glass of Blessings",
        "isbnCode": "978875844276081",
        "author": "Mr. Angelo Jenkins",
        "genre": "poetry",
        "yearOfPublication": "2012",
        "price": 4949.39,
        "stock": 13
    },
    {
        "id": "fe45af51-ca14-4db2-aebc-fc3d616df546",
        "title": "The Millstone",
        "isbnCode": "978466520459621",
        "author": "Dominique Reilly",
        "genre": "mystery",
        "yearOfPublication": "2005",
        "price": 2351.17,
        "stock": 17
    },
    {
        "id": "9afd17ae-371b-487c-b07f-63d32b7c03c0",
        "title": "East of Eden",
        "isbnCode": "978929409547383",
        "author": "Yvette Parisian Sr.",
        "genre": "mystery",
        "yearOfPublication": "2005",
        "price": 4633.15,
        "stock": 6
    },
    {
        "id": "01e94bff-1e56-4beb-90d0-d52ec23f4bfc",
        "title": "Precious Bane",
        "isbnCode": "978164377065499",
        "author": "Kasha Bartell",
        "genre": "mystery",
        "yearOfPublication": "2023",
        "price": 4120.82,
        "stock": 7
    },
    {
        "id": "9fb96d64-ad1d-49da-8d2c-14cf1c5299e8",
        "title": "The House of Mirth",
        "isbnCode": "978570532886804",
        "author": "Miss Jannet Mayer",
        "genre": "mystery",
        "yearOfPublication": "1956",
        "price": 2150.81,
        "stock": 16
    },
    {
        "id": "580828a5-4863-42ed-b152-a14357799c7c",
        "title": "Mr Standfast",
        "isbnCode": "978240963953601",
        "author": "Joan Prosacco",
        "genre": "horror",
        "yearOfPublication": "1983",
        "price": 3814.54,
        "stock": 13
    },
    {
        "id": "18941deb-0b66-4a5b-a39f-cda1bd33ada8",
        "title": "Wildfire at Midnight",
        "isbnCode": "978347459148019",
        "author": "Graig Wuckert",
        "genre": "poetry",
        "yearOfPublication": "1997",
        "price": 4537.75,
        "stock": 7
    },
    {
        "id": "14ba15d1-8b46-4011-8886-c2cf3d29c593",
        "title": "Noli Me Tangere",
        "isbnCode": "978300548717725",
        "author": "Lynna Heaney II",
        "genre": "horror",
        "yearOfPublication": "2013",
        "price": 4100.74,
        "stock": 16
    },
    {
        "id": "8f7edca0-5e39-4e91-b91a-9cc2255fb62c",
        "title": "Arms and the Man",
        "isbnCode": "978317467067595",
        "author": "Lanny Brown",
        "genre": "mystery",
        "yearOfPublication": "2010",
        "price": 4960.70,
        "stock": 1
    },
    {
        "id": "be2924b6-19a2-4137-93e7-b5eb262ac240",
        "title": "The Moving Finger",
        "isbnCode": "978287948727734",
        "author": "Jaime Fadel",
        "genre": "mystery",
        "yearOfPublication": "2019",
        "price": 4795.83,
        "stock": 2
    },
    {
        "id": "1107043d-76a2-4832-bbf4-6808c1633bd6",
        "title": "To Your Scattered Bodies Go",
        "isbnCode": "978762957081207",
        "author": "Mrs. Margert Hauck",
        "genre": "mystery",
        "yearOfPublication": "2021",
        "price": 3166.82,
        "stock": 15
    },
    {
        "id": "6c456d73-1e8c-4699-9f88-12131f8e3815",
        "title": "Arms and the Man",
        "isbnCode": "978142676890263",
        "author": "Collen Kassulke",
        "genre": "thriller",
        "yearOfPublication": "2005",
        "price": 4484.09,
        "stock": 2
    },
    {
        "id": "db9adbe3-cff1-4971-a41a-607808314f32",
        "title": "The Little Foxes",
        "isbnCode": "978509048226864",
        "author": "Emmanuel Kovacek III",
        "genre": "horror",
        "yearOfPublication": "1981",
        "price": 4618.12,
        "stock": 4
    },
    {
        "id": "89e36b37-242a-47ee-8207-14a7685ef776",
        "title": "Gone with the Wind",
        "isbnCode": "978882385235318",
        "author": "Yasmine Swift",
        "genre": "mystery",
        "yearOfPublication": "1947",
        "price": 2670.69,
        "stock": 9
    },
    {
        "id": "f103a3c3-34f2-481e-aa45-41f0308a1671",
        "title": "All Passion Spent",
        "isbnCode": "978200522213837",
        "author": "Geraldo Trantow",
        "genre": "poetry",
        "yearOfPublication": "1938",
        "price": 3715.65,
        "stock": 1
    },
    {
        "id": "9758e6ab-a3b4-4c46-b7a5-c4ae4e1bf402",
        "title": "Fair Stood the Wind for France",
        "isbnCode": "978947608114630",
        "author": "Barney Steuber",
        "genre": "mystery",
        "yearOfPublication": "2000",
        "price": 2962.86,
        "stock": 6
    },
    {
        "id": "62a42dfc-04ec-42ff-b7d2-6b3451d8416d",
        "title": "The Cricket on the Hearth",
        "isbnCode": "978303230140746",
        "author": "Mrs. Valrie Steuber",
        "genre": "poetry",
        "yearOfPublication": "1967",
        "price": 3633.88,
        "stock": 16
    },
    {
        "id": "c769d3ef-2cd7-43a5-9683-68d1a26da1e2",
        "title": "Of Human Bondage",
        "isbnCode": "978413864160221",
        "author": "Willis Padberg",
        "genre": "friction",
        "yearOfPublication": "1984",
        "price": 3720.34,
        "stock": 8
    },
    {
        "id": "06cad562-ae88-4fad-8b68-7f8dae86ccf7",
        "title": "Quo Vadis",
        "isbnCode": "978341089818274",
        "author": "Kasey Purdy IV",
        "genre": "friction",
        "yearOfPublication": "1974",
        "price": 3450.17,
        "stock": 18
    },
    {
        "id": "0b753547-9464-4f92-919f-1b1b671094a7",
        "title": "Surprised by Joy",
        "isbnCode": "978559318113688",
        "author": "Connie Ward",
        "genre": "horror",
        "yearOfPublication": "2010",
        "price": 3260.72,
        "stock": 10
    },
    {
        "id": "7ad01172-fa57-4729-aa81-0f050c6be1e3",
        "title": "That Hideous Strength",
        "isbnCode": "978262996947320",
        "author": "Jamie Nitzsche",
        "genre": "thriller",
        "yearOfPublication": "1982",
        "price": 4573.07,
        "stock": 10
    },
    {
        "id": "7bb01eab-825b-46b9-bf97-7fb0ecaa85ac",
        "title": "Endless Night",
        "isbnCode": "978912356754646",
        "author": "Damion Goldner",
        "genre": "thriller",
        "yearOfPublication": "1975",
        "price": 2359.80,
        "stock": 0
    },
    {
        "id": "19267bb9-2579-4a73-9d0a-1a66a1fbfea1",
        "title": "The Painted Veil",
        "isbnCode": "978193372306568",
        "author": "Joan Wisoky Sr.",
        "genre": "horror",
        "yearOfPublication": "1964",
        "price": 4449.11,
        "stock": 12
    },
    {
        "id": "75dc1015-d8f4-4654-a9a9-ca7d0f38d014",
        "title": "Many Waters",
        "isbnCode": "978542151613212",
        "author": "Rey Pouros PhD",
        "genre": "horror",
        "yearOfPublication": "1950",
        "price": 4564.21,
        "stock": 16
    },
    {
        "id": "34efff45-5f58-418c-a9fe-5af54163a615",
        "title": "An Instant In The Wind",
        "isbnCode": "978307308760364",
        "author": "Floyd Rogahn",
        "genre": "poetry",
        "yearOfPublication": "1927",
        "price": 3994.18,
        "stock": 3
    },
    {
        "id": "9cefc778-d0ad-4501-831b-32b728eea7b3",
        "title": "This Side of Paradise",
        "isbnCode": "978712208367488",
        "author": "Carolyne Metz",
        "genre": "thriller",
        "yearOfPublication": "1990",
        "price": 4196.53,
        "stock": 0
    },
    {
        "id": "e214cae3-e912-4265-957e-ec8cfd5b67a2",
        "title": "Specimen Days",
        "isbnCode": "978065940716690",
        "author": "Miss Dick Parisian",
        "genre": "horror",
        "yearOfPublication": "1995",
        "price": 2782.18,
        "stock": 6
    },
    {
        "id": "6d58c36e-8bc5-4562-92ea-378f95a5f9a1",
        "title": "The Torment of Others",
        "isbnCode": "978002922386244",
        "author": "Laurice Stanton",
        "genre": "horror",
        "yearOfPublication": "1924",
        "price": 2651.76,
        "stock": 5
    },
    {
        "id": "2641e407-80e6-48fd-abe9-57888789c4f3",
        "title": "The Other Side of Silence",
        "isbnCode": "978628002236709",
        "author": "Daniell Streich",
        "genre": "horror",
        "yearOfPublication": "1924",
        "price": 2963.44,
        "stock": 4
    },
    {
        "id": "bae95e19-91ba-473f-8004-df13eb0b2f21",
        "title": "East of Eden",
        "isbnCode": "978916452709937",
        "author": "Lupe Renner",
        "genre": "thriller",
        "yearOfPublication": "2017",
        "price": 4642.42,
        "stock": 5
    },
    {
        "id": "8442f8ad-1407-4c46-80ec-b317c26daff1",
        "title": "The Way of All Flesh",
        "isbnCode": "978162694849005",
        "author": "Lewis Blick",
        "genre": "horror",
        "yearOfPublication": "1977",
        "price": 4901.49,
        "stock": 3
    },
    {
        "id": "fa0b363c-57b4-47f0-b6b0-28fbb16e4f72",
        "title": "The Way Through the Woods",
        "isbnCode": "978883951991417",
        "author": "Deeanna Kub",
        "genre": "horror",
        "yearOfPublication": "2001",
        "price": 2251.93,
        "stock": 6
    },
    {
        "id": "f9c1e4d7-89ea-415a-a5a1-e8c8355dd57c",
        "title": "Blue Remembered Earth",
        "isbnCode": "978727769757047",
        "author": "Christi Casper",
        "genre": "mystery",
        "yearOfPublication": "1984",
        "price": 2340.54,
        "stock": 18
    },
    {
        "id": "65252983-c126-4418-adaa-9c194c866d39",
        "title": "Taming a Sea Horse",
        "isbnCode": "978079172078633",
        "author": "Mr. Twana Fritsch",
        "genre": "horror",
        "yearOfPublication": "1996",
        "price": 4169.85,
        "stock": 10
    },
    {
        "id": "6cf0ed1c-6697-4343-a9df-a0daede5aa41",
        "title": "East of Eden",
        "isbnCode": "978699482256719",
        "author": "Mara Cruickshank DDS",
        "genre": "friction",
        "yearOfPublication": "1984",
        "price": 4782.38,
        "stock": 0
    },
    {
        "id": "c0d257cf-7cd2-4e0a-9c10-029ada6556b6",
        "title": "The Little Foxes",
        "isbnCode": "978931822383227",
        "author": "Sherley Haley",
        "genre": "thriller",
        "yearOfPublication": "1971",
        "price": 3273.17,
        "stock": 15
    },
    {
        "id": "5f6137f8-858d-4ae1-b047-567e017e51e7",
        "title": "Unweaving the Rainbow",
        "isbnCode": "978151528371273",
        "author": "Mr. Nicki Thiel",
        "genre": "friction",
        "yearOfPublication": "2012",
        "price": 4271.83,
        "stock": 9
    },
    {
        "id": "ece0c7fd-804b-406f-b2d0-f51653331301",
        "title": "A Catskill Eagle",
        "isbnCode": "978550763740329",
        "author": "Mr. Andres Bechtelar",
        "genre": "mystery",
        "yearOfPublication": "1997",
        "price": 3185.70,
        "stock": 9
    },
    {
        "id": "7dad0556-1b45-49ff-a9c6-9e89d3a0a09e",
        "title": "Rosemary Sutcliff",
        "isbnCode": "978992152463915",
        "author": "Marie Will",
        "genre": "horror",
        "yearOfPublication": "1943",
        "price": 3563.74,
        "stock": 0
    },
    {
        "id": "7dfdce25-900c-4b42-838e-e661ca1be2a3",
        "title": "The Lathe of Heaven",
        "isbnCode": "978460248375851",
        "author": "Rodrick Treutel",
        "genre": "mystery",
        "yearOfPublication": "1948",
        "price": 3451.41,
        "stock": 1
    },
    {
        "id": "aa4b5374-2888-4c0c-8711-76e5530dd293",
        "title": "The Grapes of Wrath",
        "isbnCode": "978128710808285",
        "author": "Keturah Nikolaus",
        "genre": "poetry",
        "yearOfPublication": "1985",
        "price": 2995.69,
        "stock": 15
    },
    {
        "id": "029cab7e-46ea-41ef-beab-c986dd638df2",
        "title": "Such, Such Were the Joys",
        "isbnCode": "978027910873217",
        "author": "Lea Walter",
        "genre": "friction",
        "yearOfPublication": "1988",
        "price": 3325.59,
        "stock": 12
    },
    {
        "id": "bef31c81-85f3-4084-973c-f4dae8020c68",
        "title": "A Glass of Blessings",
        "isbnCode": "978811999782674",
        "author": "Mr. Terrie Dooley",
        "genre": "horror",
        "yearOfPublication": "1968",
        "price": 3121.16,
        "stock": 2
    },
    {
        "id": "95a7f3b5-27de-4713-85ac-9954949270c1",
        "title": "Beyond the Mexique Bay",
        "isbnCode": "978233670503183",
        "author": "Susanna Littel",
        "genre": "horror",
        "yearOfPublication": "2016",
        "price": 2675.78,
        "stock": 11
    },
    {
        "id": "c3a3011d-f493-45f8-b56a-c58051315e49",
        "title": "Those Barren Leaves, Thrones, Dominations",
        "isbnCode": "978861715963992",
        "author": "Mr. Leon Bahringer",
        "genre": "horror",
        "yearOfPublication": "1953",
        "price": 4646.53,
        "stock": 11
    },
    {
        "id": "59911840-09cf-4312-830d-0a4e1a7127ed",
        "title": "That Hideous Strength",
        "isbnCode": "978631836436782",
        "author": "Miss Barbar Rohan",
        "genre": "horror",
        "yearOfPublication": "1975",
        "price": 3185.11,
        "stock": 18
    },
    {
        "id": "f0d97de4-a288-4d2f-9c02-d432f326a456",
        "title": "His Dark Materials",
        "isbnCode": "978809026750683",
        "author": "Santa Little",
        "genre": "friction",
        "yearOfPublication": "1985",
        "price": 3865.01,
        "stock": 2
    },
    {
        "id": "c99efa52-0221-4ae1-98ba-aa8b1fb41ecb",
        "title": "Recalled to Life",
        "isbnCode": "978240810293887",
        "author": "Miss Reinaldo Beier",
        "genre": "mystery",
        "yearOfPublication": "1930",
        "price": 3322.63,
        "stock": 6
    },
    {
        "id": "fcb0d33e-08fd-4bfe-bf37-0dc04f91aa74",
        "title": "Blithe Spirit",
        "isbnCode": "978880976589324",
        "author": "Carla Grimes",
        "genre": "mystery",
        "yearOfPublication": "2011",
        "price": 3726.30,
        "stock": 3
    },
    {
        "id": "ec20cd81-61e2-4e4e-939d-18a2cbf044ad",
        "title": "The Heart Is a Lonely Hunter",
        "isbnCode": "978046863451521",
        "author": "Lakeesha Zemlak V",
        "genre": "thriller",
        "yearOfPublication": "2000",
        "price": 2883.80,
        "stock": 18
    },
    {
        "id": "b23dc263-7f8a-4057-84ae-6761eb14fae6",
        "title": "The Other Side of Silence",
        "isbnCode": "978294737436009",
        "author": "Miss Rebecka Jast",
        "genre": "thriller",
        "yearOfPublication": "1933",
        "price": 4126.10,
        "stock": 13
    },
    {
        "id": "1acb3c25-053e-49d2-b90a-ae6f31a8390a",
        "title": "Alone on a Wide, Wide Sea",
        "isbnCode": "978149796796990",
        "author": "Miss Donte Runte",
        "genre": "mystery",
        "yearOfPublication": "2000",
        "price": 3887.44,
        "stock": 0
    },
    {
        "id": "63e9d237-ebf6-4826-83dd-b32a6a1953e4",
        "title": "The Road Less Traveled",
        "isbnCode": "978910645493751",
        "author": "Naomi Wisozk",
        "genre": "friction",
        "yearOfPublication": "1971",
        "price": 2566.17,
        "stock": 11
    },
    {
        "id": "e6df4272-e0ed-42b6-bb90-6094edad401f",
        "title": "A Time to Kill",
        "isbnCode": "978436795987494",
        "author": "Fermina Sanford",
        "genre": "horror",
        "yearOfPublication": "1981",
        "price": 3460.77,
        "stock": 10
    },
    {
        "id": "1ecbbba1-c37b-47e8-a052-50dbddb4d947",
        "title": "For Whom the Bell Tolls",
        "isbnCode": "978255958831754",
        "author": "Jutta Dibbert IV",
        "genre": "poetry",
        "yearOfPublication": "1952",
        "price": 2384.77,
        "stock": 2
    },
    {
        "id": "204a7b84-aa5f-49db-be93-aac56b091c6c",
        "title": "Ah, Wilderness!",
        "isbnCode": "978394298091323",
        "author": "Elmer Hegmann",
        "genre": "horror",
        "yearOfPublication": "1976",
        "price": 4175.83,
        "stock": 19
    },
    {
        "id": "71f17413-cd58-4576-91ad-c78d91649ecd",
        "title": "The Golden Bowl",
        "isbnCode": "978867018384461",
        "author": "Olivia Block",
        "genre": "friction",
        "yearOfPublication": "1931",
        "price": 4995.77,
        "stock": 15
    },
    {
        "id": "1df2adfe-401c-402a-8d2f-e009941f2cf7",
        "title": "Let Us Now Praise Famous Men",
        "isbnCode": "978668040876083",
        "author": "Era Franecki",
        "genre": "thriller",
        "yearOfPublication": "1950",
        "price": 4721.18,
        "stock": 6
    },
    {
        "id": "2ddb5f5a-45cc-485f-acfb-d8846a8245c0",
        "title": "Clouds of Witness",
        "isbnCode": "978718608627831",
        "author": "Val Nienow",
        "genre": "thriller",
        "yearOfPublication": "1963",
        "price": 4528.25,
        "stock": 4
    },
    {
        "id": "2bde0bda-15ef-4fcc-8a87-7f0945ed546c",
        "title": "Antic Hay",
        "isbnCode": "978146151810265",
        "author": "Ms. Jacqualine Nitzsche",
        "genre": "poetry",
        "yearOfPublication": "1979",
        "price": 3703.50,
        "stock": 3
    },
    {
        "id": "04f368f6-1ffa-49ff-8db3-16ecfdf7933e",
        "title": "A Glass of Blessings",
        "isbnCode": "978039275967040",
        "author": "Elia Hermiston DDS",
        "genre": "horror",
        "yearOfPublication": "1932",
        "price": 2253.17,
        "stock": 16
    },
    {
        "id": "7472d15a-57f1-4569-8ff8-b7fe6ec0047f",
        "title": "In a Dry Season",
        "isbnCode": "978187704113466",
        "author": "Roland Grady",
        "genre": "poetry",
        "yearOfPublication": "1971",
        "price": 2408.53,
        "stock": 3
    },
    {
        "id": "b1b3cace-e296-4487-85ea-ea17f4a13fd9",
        "title": "Mr Standfast",
        "isbnCode": "978996654296900",
        "author": "Phylicia Bruen V",
        "genre": "friction",
        "yearOfPublication": "1974",
        "price": 3885.49,
        "stock": 18
    },
    {
        "id": "945c376b-ab68-4b6e-8f34-e272459c15d9",
        "title": "Rosemary Sutcliff",
        "isbnCode": "978311554523739",
        "author": "Isidro Fay",
        "genre": "thriller",
        "yearOfPublication": "1969",
        "price": 2387.35,
        "stock": 11
    },
    {
        "id": "de5bd2e7-4178-4da6-8b81-c27e264a5f69",
        "title": "Death Be Not Proud",
        "isbnCode": "978889925596831",
        "author": "Chet Stracke PhD",
        "genre": "friction",
        "yearOfPublication": "1990",
        "price": 2554.33,
        "stock": 3
    },
    {
        "id": "04132858-08c3-41d7-af20-11a14b891373",
        "title": "Specimen Days",
        "isbnCode": "978626413251760",
        "author": "Weston Torphy",
        "genre": "poetry",
        "yearOfPublication": "2002",
        "price": 3093.02,
        "stock": 3
    },
    {
        "id": "a151cb8f-e188-4b5b-b18e-384b85272ad3",
        "title": "By Grand Central Station I Sat Down and Wept",
        "isbnCode": "978186701967521",
        "author": "Mrs. Carli Wehner",
        "genre": "thriller",
        "yearOfPublication": "1980",
        "price": 2185.64,
        "stock": 14
    },
    {
        "id": "31ec4613-7b28-4872-ad8d-f7e803430e2b",
        "title": "All the King's Men",
        "isbnCode": "978562272733837",
        "author": "Leif Botsford DVM",
        "genre": "mystery",
        "yearOfPublication": "2023",
        "price": 4585.12,
        "stock": 17
    },
    {
        "id": "0931965a-4df4-4569-9b97-31574ebb0b41",
        "title": "The Yellow Meads of Asphodel",
        "isbnCode": "978296668513642",
        "author": "Ms. Hyo Lindgren",
        "genre": "friction",
        "yearOfPublication": "1971",
        "price": 4630.85,
        "stock": 3
    },
    {
        "id": "efdaf420-2d4e-41d4-8d48-3a1786f3e927",
        "title": "Precious Bane",
        "isbnCode": "978019717244475",
        "author": "Marget Ferry",
        "genre": "poetry",
        "yearOfPublication": "1969",
        "price": 4609.19,
        "stock": 10
    },
    {
        "id": "0d879ec3-61bc-494c-8f9c-7d1fd1df476a",
        "title": "This Side of Paradise",
        "isbnCode": "978447970492558",
        "author": "Raymond Nitzsche",
        "genre": "poetry",
        "yearOfPublication": "2015",
        "price": 3439.33,
        "stock": 13
    },
    {
        "id": "6379687b-3eb5-4135-a41a-f1a8d3abdab7",
        "title": "Waiting for the Barbarians",
        "isbnCode": "978565051516516",
        "author": "Sonny Kuhn",
        "genre": "horror",
        "yearOfPublication": "1929",
        "price": 2517.71,
        "stock": 0
    },
    {
        "id": "84871451-76f2-496d-a7af-9627023189ed",
        "title": "Wildfire at Midnight",
        "isbnCode": "978418385971686",
        "author": "Gilberto Hahn PhD",
        "genre": "horror",
        "yearOfPublication": "2010",
        "price": 4501.41,
        "stock": 14
    },
    {
        "id": "8b72cb22-648e-4238-b794-13db6b42d992",
        "title": "A Many-Splendoured Thing",
        "isbnCode": "978919314354021",
        "author": "Wilber Rowe",
        "genre": "friction",
        "yearOfPublication": "2004",
        "price": 4350.94,
        "stock": 19
    },
    {
        "id": "05ec3327-09f8-44b4-9d0b-ef9d62e4a5af",
        "title": "The Millstone",
        "isbnCode": "978369213990896",
        "author": "Garrett Witting",
        "genre": "mystery",
        "yearOfPublication": "1929",
        "price": 3816.10,
        "stock": 7
    },
    {
        "id": "5177edd8-70b5-4053-96a2-529e7f728e89",
        "title": "Have His Carcase",
        "isbnCode": "978406111153430",
        "author": "Mrs. Ruben Rowe",
        "genre": "poetry",
        "yearOfPublication": "2016",
        "price": 2465.30,
        "stock": 4
    },
    {
        "id": "cee8cea7-f561-46a0-9b67-d218d83e508f",
        "title": "Bury My Heart at Wounded Knee",
        "isbnCode": "978463779650815",
        "author": "Darron Lesch",
        "genre": "horror",
        "yearOfPublication": "1943",
        "price": 4845.66,
        "stock": 19
    },
    {
        "id": "6d77f8b8-df6b-4297-b4ae-7a27a38ded9c",
        "title": "It's a Battlefield",
        "isbnCode": "978811756117851",
        "author": "Jenniffer Gleichner",
        "genre": "friction",
        "yearOfPublication": "1960",
        "price": 2414.79,
        "stock": 6
    },
    {
        "id": "6309f351-1cfa-4f41-8ee7-e982a307a57b",
        "title": "The Mermaids Singing",
        "isbnCode": "978664396846274",
        "author": "Joey Reichel",
        "genre": "horror",
        "yearOfPublication": "1934",
        "price": 4462.06,
        "stock": 12
    },
    {
        "id": "e5998c4a-5d20-4697-b117-848cdd59dd59",
        "title": "The Moving Toyshop",
        "isbnCode": "978735730009730",
        "author": "Ms. Myra Leannon",
        "genre": "friction",
        "yearOfPublication": "1964",
        "price": 3711.60,
        "stock": 8
    },
    {
        "id": "28baad72-bace-48ef-afd4-cf62c8af9a69",
        "title": "The Way Through the Woods",
        "isbnCode": "978868567959259",
        "author": "Ms. David Paucek",
        "genre": "mystery",
        "yearOfPublication": "1963",
        "price": 3484.74,
        "stock": 7
    },
    {
        "id": "cc8d67ed-96e4-4ba0-8605-c28fcb35f800",
        "title": "Behold the Man",
        "isbnCode": "978848822933605",
        "author": "Gricelda Little",
        "genre": "poetry",
        "yearOfPublication": "1952",
        "price": 4560.18,
        "stock": 6
    },
    {
        "id": "68b8a799-c9a2-4f65-bbd9-83f73e34bc45",
        "title": "The Wind's Twelve Quarters",
        "isbnCode": "978103428244780",
        "author": "Lee Nader",
        "genre": "thriller",
        "yearOfPublication": "1987",
        "price": 4804.55,
        "stock": 8
    },
    {
        "id": "539dd5e9-5f3f-406f-9da5-3348d5866eca",
        "title": "Beneath the Bleeding",
        "isbnCode": "978402381999443",
        "author": "Mr. Billye Hackett",
        "genre": "horror",
        "yearOfPublication": "1963",
        "price": 3906.99,
        "stock": 16
    },
    {
        "id": "93bcf573-0dca-421f-80d5-07f36ce2e60b",
        "title": "Of Mice and Men",
        "isbnCode": "978634495943803",
        "author": "Mr. Jamika Cole",
        "genre": "thriller",
        "yearOfPublication": "1936",
        "price": 3285.13,
        "stock": 14
    },
    {
        "id": "b2e28e72-ff53-4faa-ad1a-50d761ab06a0",
        "title": "Frequent Hearses",
        "isbnCode": "978330603441112",
        "author": "Victoria Kutch",
        "genre": "friction",
        "yearOfPublication": "1994",
        "price": 4702.82,
        "stock": 11
    },
    {
        "id": "73561fb4-5f17-4cea-8046-a646a766a79c",
        "title": "A Time of Gifts",
        "isbnCode": "978728023240466",
        "author": "Scot Trantow",
        "genre": "friction",
        "yearOfPublication": "1988",
        "price": 3307.65,
        "stock": 8
    },
    {
        "id": "0d950deb-f4b8-415f-8a1f-8f6e6a2adc95",
        "title": "Where Angels Fear to Tread",
        "isbnCode": "978639250492070",
        "author": "Virgil Bauch",
        "genre": "thriller",
        "yearOfPublication": "2001",
        "price": 4386.22,
        "stock": 14
    },
    {
        "id": "331d0c6d-6242-4363-80ae-dda05be256bc",
        "title": "The Soldier's Art",
        "isbnCode": "978318220450673",
        "author": "Glen Jenkins I",
        "genre": "thriller",
        "yearOfPublication": "2011",
        "price": 3777.07,
        "stock": 5
    },
    {
        "id": "cfe7fa3c-cedf-43a3-8776-c678409ac4f5",
        "title": "To Your Scattered Bodies Go",
        "isbnCode": "978895366054370",
        "author": "Hoyt Pacocha",
        "genre": "thriller",
        "yearOfPublication": "2007",
        "price": 4107.93,
        "stock": 6
    },
    {
        "id": "804e36d4-727d-485a-9ddc-29beccae9e54",
        "title": "Ego Dominus Tuus",
        "isbnCode": "978239523577999",
        "author": "Parker Kunde",
        "genre": "thriller",
        "yearOfPublication": "1994",
        "price": 2287.58,
        "stock": 13
    },
    {
        "id": "ab9c32b7-286c-4eae-99ff-0769b7a6ca66",
        "title": "That Good Night",
        "isbnCode": "978524001859146",
        "author": "Derek Friesen V",
        "genre": "thriller",
        "yearOfPublication": "2017",
        "price": 2579.56,
        "stock": 19
    },
    {
        "id": "79467300-ab97-40fa-8dbb-1a3585ea286a",
        "title": "If I Forget Thee Jerusalem",
        "isbnCode": "978104070578950",
        "author": "Ms. Eleanore Quigley",
        "genre": "mystery",
        "yearOfPublication": "2018",
        "price": 3460.37,
        "stock": 18
    },
    {
        "id": "e76a55ec-f3d9-42bb-b959-1ee1a7a285d0",
        "title": "No Highway",
        "isbnCode": "978627021056701",
        "author": "Coy Trantow",
        "genre": "thriller",
        "yearOfPublication": "1980",
        "price": 3339.59,
        "stock": 6
    },
    {
        "id": "b7afa84e-4638-405e-9ea5-b080086db22b",
        "title": "Terrible Swift Sword",
        "isbnCode": "978724699687748",
        "author": "Mrs. Debora Rosenbaum",
        "genre": "mystery",
        "yearOfPublication": "1980",
        "price": 3817.36,
        "stock": 9
    },
    {
        "id": "92592baf-706c-44a4-9ae4-90a87f893c37",
        "title": "The Torment of Others",
        "isbnCode": "978223965645836",
        "author": "Annemarie Hessel",
        "genre": "mystery",
        "yearOfPublication": "2014",
        "price": 4333.03,
        "stock": 8
    },
    {
        "id": "6bf35e8b-69e8-45f4-ae3b-9e19e5d2e1ea",
        "title": "Jacob Have I Loved",
        "isbnCode": "978129158379233",
        "author": "Dan Simonis",
        "genre": "mystery",
        "yearOfPublication": "2000",
        "price": 2930.95,
        "stock": 11
    },
    {
        "id": "c19edfd8-d359-4085-8569-673509862200",
        "title": "When the Green Woods Laugh",
        "isbnCode": "978203177875092",
        "author": "Mervin Haley DVM",
        "genre": "poetry",
        "yearOfPublication": "2013",
        "price": 4318.67,
        "stock": 10
    },
    {
        "id": "c9bb58cb-e6fd-46eb-8101-b6be2e64e429",
        "title": "Of Mice and Men",
        "isbnCode": "978083035839307",
        "author": "Mrs. Ignacio Lesch",
        "genre": "friction",
        "yearOfPublication": "2001",
        "price": 3019.94,
        "stock": 14
    },
    {
        "id": "a3208fe4-3bb6-4944-9ebf-3e72b494a81b",
        "title": "Gone with the Wind",
        "isbnCode": "978078922708869",
        "author": "Madlyn Stehr",
        "genre": "poetry",
        "yearOfPublication": "1947",
        "price": 4236.07,
        "stock": 8
    },
    {
        "id": "74d94866-a18e-4cc0-b990-e8c6fc79e35e",
        "title": "Great Work of Time",
        "isbnCode": "978976566868047",
        "author": "Brant Schmeler",
        "genre": "poetry",
        "yearOfPublication": "1947",
        "price": 2560.08,
        "stock": 9
    },
    {
        "id": "563dca30-7e21-4f6d-a36a-58d954764227",
        "title": "The Skull Beneath the Skin",
        "isbnCode": "978497845819463",
        "author": "Celine Fadel",
        "genre": "mystery",
        "yearOfPublication": "2008",
        "price": 2184.08,
        "stock": 5
    },
    {
        "id": "00a8b893-ccf6-4882-9424-eb8cb1f5ae2a",
        "title": "The Little Foxes",
        "isbnCode": "978012134621048",
        "author": "Guillermo Mueller",
        "genre": "horror",
        "yearOfPublication": "2007",
        "price": 3434.95,
        "stock": 0
    },
    {
        "id": "1b942bbc-2e65-46ba-93f7-8595b7ccc4fe",
        "title": "To Say Nothing of the Dog",
        "isbnCode": "978540840080165",
        "author": "Ms. Marth Lind",
        "genre": "friction",
        "yearOfPublication": "1964",
        "price": 2620.48,
        "stock": 12
    },
    {
        "id": "cb0babab-4a7d-4b7c-81a8-4464d407bbae",
        "title": "The Waste Land",
        "isbnCode": "978170288351421",
        "author": "Li Murazik",
        "genre": "mystery",
        "yearOfPublication": "2014",
        "price": 3756.31,
        "stock": 1
    },
    {
        "id": "3de97a25-470c-4a1d-814d-95b80ac06421",
        "title": "This Side of Paradise",
        "isbnCode": "978478073646205",
        "author": "Kristopher Rice",
        "genre": "friction",
        "yearOfPublication": "1991",
        "price": 3149.21,
        "stock": 17
    },
    {
        "id": "c5b3064d-3ff3-4cab-9687-b74b036a6e1e",
        "title": "A Passage to India",
        "isbnCode": "978415239138114",
        "author": "Gustavo Paucek",
        "genre": "mystery",
        "yearOfPublication": "2019",
        "price": 4593.75,
        "stock": 15
    },
    {
        "id": "8f32380a-f0ac-441b-b6b3-51e4d039f325",
        "title": "Of Human Bondage",
        "isbnCode": "978274786654155",
        "author": "Rosetta Yundt",
        "genre": "mystery",
        "yearOfPublication": "2017",
        "price": 3420.51,
        "stock": 9
    },
    {
        "id": "73f0c142-9e70-4c5a-bb41-f8c17f55e1b7",
        "title": "Endless Night",
        "isbnCode": "978002099700659",
        "author": "Rafaela Tillman",
        "genre": "mystery",
        "yearOfPublication": "1949",
        "price": 4845.34,
        "stock": 13
    },
    {
        "id": "716d5b38-71db-41df-be93-0328529fbcc3",
        "title": "The World, the Flesh and the Devil",
        "isbnCode": "978719491974555",
        "author": "Alphonse Langosh",
        "genre": "horror",
        "yearOfPublication": "1947",
        "price": 2733.68,
        "stock": 8
    },
    {
        "id": "a5339d30-6c34-496d-bc1e-888307fe4e4f",
        "title": "Those Barren Leaves, Thrones, Dominations",
        "isbnCode": "978647384257076",
        "author": "Haywood Windler",
        "genre": "horror",
        "yearOfPublication": "1925",
        "price": 3275.16,
        "stock": 17
    },
    {
        "id": "714bec9b-113f-47ac-b36e-6bc8d03aadb5",
        "title": "As I Lay Dying",
        "isbnCode": "978622811960011",
        "author": "Mao Schiller",
        "genre": "poetry",
        "yearOfPublication": "2005",
        "price": 4279.72,
        "stock": 13
    },
    {
        "id": "94a87d55-46ea-46e7-89aa-8fbbd32e8db9",
        "title": "Arms and the Man",
        "isbnCode": "978495497721132",
        "author": "Billi Bernhard",
        "genre": "poetry",
        "yearOfPublication": "1994",
        "price": 3291.96,
        "stock": 13
    },
    {
        "id": "9e8eccc4-9973-49db-a83d-08f53136a1fa",
        "title": "Behold the Man",
        "isbnCode": "978533816633728",
        "author": "Ronni Kuphal",
        "genre": "thriller",
        "yearOfPublication": "2004",
        "price": 3643.13,
        "stock": 2
    },
    {
        "id": "0e2c69b7-6c6d-40be-b2fd-56edd50d46bd",
        "title": "Eyeless in Gaza",
        "isbnCode": "978415448183060",
        "author": "Andy Huels III",
        "genre": "horror",
        "yearOfPublication": "2019",
        "price": 3177.42,
        "stock": 13
    },
    {
        "id": "554cb1d0-e1fd-456e-adc3-574cc7a5f044",
        "title": "Things Fall Apart",
        "isbnCode": "978848287466661",
        "author": "Crysta Gaylord",
        "genre": "poetry",
        "yearOfPublication": "2004",
        "price": 3845.64,
        "stock": 18
    },
    {
        "id": "c8d689ac-bde7-4e6a-82aa-5987262fdd53",
        "title": "The Wealth of Nations",
        "isbnCode": "978709213462792",
        "author": "Arla Herman",
        "genre": "friction",
        "yearOfPublication": "1969",
        "price": 3863.11,
        "stock": 11
    },
    {
        "id": "78372106-3126-485d-9ad5-3c5d53e28711",
        "title": "Nectar in a Sieve",
        "isbnCode": "978002230857835",
        "author": "Rusty Schumm",
        "genre": "friction",
        "yearOfPublication": "1997",
        "price": 4407.41,
        "stock": 5
    },
    {
        "id": "4a44c67b-3813-4361-a8d8-2b5c60b1aff7",
        "title": "A Summer Bird-Cage",
        "isbnCode": "978078651881784",
        "author": "King Medhurst",
        "genre": "mystery",
        "yearOfPublication": "2018",
        "price": 4762.75,
        "stock": 5
    },
    {
        "id": "0a9ef5b1-2198-4f1d-aed1-1f8bf5836d4f",
        "title": "A Swiftly Tilting Planet",
        "isbnCode": "978555348798040",
        "author": "Enola Lakin",
        "genre": "friction",
        "yearOfPublication": "1988",
        "price": 2553.34,
        "stock": 9
    },
    {
        "id": "b5e0e57d-4e62-49dd-a52b-3393dda1970b",
        "title": "A Time to Kill",
        "isbnCode": "978758301714594",
        "author": "Emanuel Sauer",
        "genre": "horror",
        "yearOfPublication": "1948",
        "price": 4821.32,
        "stock": 2
    },
    {
        "id": "dc957750-08cc-41fb-aadf-649823fe9552",
        "title": "Dulce et Decorum Est",
        "isbnCode": "978204835221111",
        "author": "Augustus Nikolaus",
        "genre": "horror",
        "yearOfPublication": "1973",
        "price": 3133.61,
        "stock": 7
    },
    {
        "id": "5f287e89-36c7-436a-af15-a52aecb52cf6",
        "title": "The Widening Gyre",
        "isbnCode": "978543238573604",
        "author": "Maryann Strosin PhD",
        "genre": "friction",
        "yearOfPublication": "1997",
        "price": 4781.18,
        "stock": 19
    },
    {
        "id": "a8b6199f-c4b4-4063-8799-0d9f8650425e",
        "title": "Mr Standfast",
        "isbnCode": "978942625762165",
        "author": "Kareem Brown",
        "genre": "thriller",
        "yearOfPublication": "1998",
        "price": 2293.25,
        "stock": 6
    },
    {
        "id": "663f525f-9c0e-4fe4-ab2c-306df49fd486",
        "title": "Of Mice and Men",
        "isbnCode": "978731976229264",
        "author": "Rosita Hilpert",
        "genre": "horror",
        "yearOfPublication": "1956",
        "price": 2940.61,
        "stock": 4
    },
    {
        "id": "bc3f873b-a313-4b39-a9f0-812f319c0080",
        "title": "Absalom, Absalom!",
        "isbnCode": "978657562017371",
        "author": "Lita Ward",
        "genre": "mystery",
        "yearOfPublication": "2005",
        "price": 2452.13,
        "stock": 5
    },
    {
        "id": "39ea7ba9-56b1-410d-a63d-36a24d5f0dba",
        "title": "The Torment of Others",
        "isbnCode": "978034023408322",
        "author": "Cathleen Herzog",
        "genre": "mystery",
        "yearOfPublication": "1998",
        "price": 3692.01,
        "stock": 13
    },
    {
        "id": "aacee2c8-0dcf-4a1a-bc28-52deec8b691b",
        "title": "When the Green Woods Laugh",
        "isbnCode": "978987292553446",
        "author": "Tandra Corwin",
        "genre": "mystery",
        "yearOfPublication": "1960",
        "price": 3183.26,
        "stock": 14
    },
    {
        "id": "dcb315de-a3f9-4bfe-9b1d-25f01ccc8f9d",
        "title": "The Grapes of Wrath",
        "isbnCode": "978910352702927",
        "author": "Cameron Crist",
        "genre": "mystery",
        "yearOfPublication": "1960",
        "price": 4427.90,
        "stock": 12
    },
    {
        "id": "2aa7d255-cc11-4c45-b1db-826d805c6a7b",
        "title": "Wildfire at Midnight",
        "isbnCode": "978874328434625",
        "author": "Zoraida Balistreri",
        "genre": "horror",
        "yearOfPublication": "1990",
        "price": 3087.29,
        "stock": 12
    },
    {
        "id": "b9dabbb8-f4e8-48bd-90dd-ceabb813796e",
        "title": "No Country for Old Men",
        "isbnCode": "978069586440128",
        "author": "Jc Gorczany",
        "genre": "horror",
        "yearOfPublication": "1926",
        "price": 4222.26,
        "stock": 14
    },
    {
        "id": "c3155601-95d5-424f-9533-84d0f6c15efc",
        "title": "An Evil Cradling",
        "isbnCode": "978732585863369",
        "author": "Pinkie Durgan",
        "genre": "mystery",
        "yearOfPublication": "1991",
        "price": 4453.44,
        "stock": 13
    },
    {
        "id": "ba08312a-166c-421d-837c-c2f79817db7f",
        "title": "The Needle's Eye",
        "isbnCode": "978898416067985",
        "author": "Jerome Olson",
        "genre": "friction",
        "yearOfPublication": "1946",
        "price": 3767.71,
        "stock": 19
    },
    {
        "id": "9115e993-13ea-4b59-97ac-3d7c4a82af16",
        "title": "When the Green Woods Laugh",
        "isbnCode": "978224845218206",
        "author": "Cyrstal Larson",
        "genre": "thriller",
        "yearOfPublication": "1932",
        "price": 4186.10,
        "stock": 9
    },
    {
        "id": "f6f5f970-f983-442d-9740-b417b0c20fa0",
        "title": "A Passage to India",
        "isbnCode": "978319148775141",
        "author": "Augusta Farrell Sr.",
        "genre": "poetry",
        "yearOfPublication": "1933",
        "price": 3331.77,
        "stock": 17
    },
    {
        "id": "8fb2b56e-6f90-4af4-932f-bbb30d9e4d74",
        "title": "Sleep the Brave",
        "isbnCode": "978089883563862",
        "author": "Lettie Gulgowski",
        "genre": "friction",
        "yearOfPublication": "1946",
        "price": 3133.99,
        "stock": 2
    },
    {
        "id": "9586736e-148e-4b59-9535-fd2578603790",
        "title": "A Handful of Dust",
        "isbnCode": "978542542369626",
        "author": "Deangelo Abernathy II",
        "genre": "mystery",
        "yearOfPublication": "1996",
        "price": 3549.21,
        "stock": 4
    },
    {
        "id": "56c0f3e4-894d-4cea-a7f5-ad0353f54d7e",
        "title": "The Torment of Others",
        "isbnCode": "978187757485626",
        "author": "Alana Graham",
        "genre": "horror",
        "yearOfPublication": "1949",
        "price": 3411.15,
        "stock": 3
    },
    {
        "id": "78ccb81d-7425-4365-8c8e-516f5328d7d0",
        "title": "For Whom the Bell Tolls",
        "isbnCode": "978025674345686",
        "author": "Harris Hudson",
        "genre": "friction",
        "yearOfPublication": "1943",
        "price": 4042.01,
        "stock": 12
    },
    {
        "id": "ea724e4a-1424-4d1d-9a92-6faef9f37e8d",
        "title": "Antic Hay",
        "isbnCode": "978947841217021",
        "author": "Sang Cormier",
        "genre": "poetry",
        "yearOfPublication": "1939",
        "price": 2961.45,
        "stock": 6
    },
    {
        "id": "eaa13295-8c39-4203-a184-a8c9e2750c47",
        "title": "After Many a Summer Dies the Swan",
        "isbnCode": "978189487321925",
        "author": "Dinorah Carroll",
        "genre": "horror",
        "yearOfPublication": "1925",
        "price": 3590.86,
        "stock": 11
    },
    {
        "id": "c08945c0-3518-4f6b-ab0f-a066d056e65d",
        "title": "From Here to Eternity",
        "isbnCode": "978950694286541",
        "author": "Kevin Schaden",
        "genre": "thriller",
        "yearOfPublication": "2019",
        "price": 2442.16,
        "stock": 5
    },
    {
        "id": "3ad99b0e-261f-4036-b88f-58461f1036da",
        "title": "Wildfire at Midnight",
        "isbnCode": "978726064801792",
        "author": "Ms. Michel Lebsack",
        "genre": "thriller",
        "yearOfPublication": "1959",
        "price": 4458.58,
        "stock": 1
    },
    {
        "id": "bbc5271e-d57c-44cb-8726-f09f8c72128f",
        "title": "Paths of Glory",
        "isbnCode": "978542602426367",
        "author": "Lamont Runolfsdottir DVM",
        "genre": "poetry",
        "yearOfPublication": "1934",
        "price": 3076.17,
        "stock": 13
    },
    {
        "id": "35e9c029-fd15-4b77-b7bb-0b2657e56285",
        "title": "Behold the Man",
        "isbnCode": "978146688758079",
        "author": "Norman Sanford",
        "genre": "horror",
        "yearOfPublication": "1944",
        "price": 3908.64,
        "stock": 0
    },
    {
        "id": "e6576b3f-5560-48fe-a0a5-66e1a210edbe",
        "title": "As I Lay Dying",
        "isbnCode": "978817852193450",
        "author": "Arianne Cruickshank",
        "genre": "poetry",
        "yearOfPublication": "1963",
        "price": 2269.16,
        "stock": 4
    },
    {
        "id": "5cd4bc5d-e731-4a7d-8a03-091c27d43ea3",
        "title": "Alone on a Wide, Wide Sea",
        "isbnCode": "978596655324691",
        "author": "Dean Wisoky",
        "genre": "horror",
        "yearOfPublication": "2006",
        "price": 3008.25,
        "stock": 1
    },
    {
        "id": "7848d378-7a9c-4da9-a4cd-c3fe0e569802",
        "title": "The Moon by Night",
        "isbnCode": "978889217766676",
        "author": "Domingo Adams",
        "genre": "horror",
        "yearOfPublication": "1940",
        "price": 3318.32,
        "stock": 4
    },
    {
        "id": "6092b131-5056-4928-a882-83908e7fe962",
        "title": "Nectar in a Sieve",
        "isbnCode": "978482130167256",
        "author": "Teresa Bartoletti",
        "genre": "friction",
        "yearOfPublication": "1986",
        "price": 3313.28,
        "stock": 15
    },
    {
        "id": "1b966168-af28-439d-b17c-4863631c8fa5",
        "title": "A Scanner Darkly",
        "isbnCode": "978047353108209",
        "author": "Dr. Jenniffer Altenwerth",
        "genre": "friction",
        "yearOfPublication": "2002",
        "price": 3312.67,
        "stock": 9
    },
    {
        "id": "c5bb5b65-a2d6-441f-9834-a5b29363df8b",
        "title": "Have His Carcase",
        "isbnCode": "978688678747951",
        "author": "Shawnta Blanda",
        "genre": "thriller",
        "yearOfPublication": "2012",
        "price": 2963.22,
        "stock": 6
    },
    {
        "id": "157a50c6-6684-4336-b76d-4730c09d43a7",
        "title": "Bury My Heart at Wounded Knee",
        "isbnCode": "978535487656693",
        "author": "Christinia Rodriguez",
        "genre": "mystery",
        "yearOfPublication": "2003",
        "price": 2624.59,
        "stock": 15
    },
    {
        "id": "eb1e19ae-38d2-45f9-b2eb-07aa266413b1",
        "title": "Things Fall Apart",
        "isbnCode": "978050031139424",
        "author": "Marty Mohr II",
        "genre": "thriller",
        "yearOfPublication": "1976",
        "price": 2670.96,
        "stock": 1
    },
    {
        "id": "3f49ceb7-5a8c-4e65-8748-47476c705efd",
        "title": "Oh! To be in England",
        "isbnCode": "978593837182778",
        "author": "Lilian Lockman",
        "genre": "mystery",
        "yearOfPublication": "2012",
        "price": 3797.14,
        "stock": 7
    },
    {
        "id": "e2167ec7-389b-49c8-8ddd-1e69968b9d45",
        "title": "Unweaving the Rainbow",
        "isbnCode": "978391653241744",
        "author": "Wyatt Yundt",
        "genre": "friction",
        "yearOfPublication": "1959",
        "price": 4010.67,
        "stock": 5
    },
    {
        "id": "a8e52cb7-76ed-4334-ac12-9739492953c3",
        "title": "The Heart Is Deceitful Above All Things",
        "isbnCode": "978184776202303",
        "author": "Graig Flatley IV",
        "genre": "thriller",
        "yearOfPublication": "1962",
        "price": 4856.29,
        "stock": 15
    },
    {
        "id": "5c50c828-dd4e-481e-b74f-a06915a310d9",
        "title": "Dance Dance Dance",
        "isbnCode": "978461357419536",
        "author": "Leandro Padberg",
        "genre": "friction",
        "yearOfPublication": "1924",
        "price": 4259.68,
        "stock": 8
    },
    {
        "id": "d51f69a6-ed35-4c02-ae1f-e4cf61754efa",
        "title": "The Needle's Eye",
        "isbnCode": "978060619144039",
        "author": "Lakenya Nolan",
        "genre": "thriller",
        "yearOfPublication": "1953",
        "price": 4442.35,
        "stock": 0
    },
    {
        "id": "951d2671-7ba5-4ab8-a7c8-27bac52dd1f3",
        "title": "The Mirror Crack'd from Side to Side",
        "isbnCode": "978042448907780",
        "author": "Ignacio Mills DDS",
        "genre": "mystery",
        "yearOfPublication": "1964",
        "price": 3560.06,
        "stock": 13
    },
    {
        "id": "13e61067-67ab-4a1d-8653-0f5568aa0171",
        "title": "As I Lay Dying",
        "isbnCode": "978224407081040",
        "author": "Willard Batz",
        "genre": "friction",
        "yearOfPublication": "1973",
        "price": 4132.14,
        "stock": 12
    },
    {
        "id": "8bca859c-f990-4a98-aade-42a381969162",
        "title": "Antic Hay",
        "isbnCode": "978942248418446",
        "author": "Seema McLaughlin",
        "genre": "thriller",
        "yearOfPublication": "2018",
        "price": 2522.96,
        "stock": 4
    },
    {
        "id": "393f22bc-5f8c-4a2a-a9f9-e7e1cb79a33a",
        "title": "To a God Unknown",
        "isbnCode": "978693721704229",
        "author": "Todd Shields",
        "genre": "mystery",
        "yearOfPublication": "1945",
        "price": 2479.10,
        "stock": 10
    },
    {
        "id": "351dcdc5-265e-4b69-b4f9-516da6441cd6",
        "title": "Some Buried Caesar",
        "isbnCode": "978902554933686",
        "author": "Ms. Armida Kassulke",
        "genre": "thriller",
        "yearOfPublication": "2020",
        "price": 4998.10,
        "stock": 15
    },
    {
        "id": "1944363d-212c-4daf-8646-4382d9da57b9",
        "title": "The Lathe of Heaven",
        "isbnCode": "978130134919437",
        "author": "Dione Armstrong",
        "genre": "horror",
        "yearOfPublication": "1947",
        "price": 4485.08,
        "stock": 2
    },
    {
        "id": "18b44df0-3f0a-4070-abb0-8df71b782e2f",
        "title": "Of Mice and Men",
        "isbnCode": "978980855355970",
        "author": "Lakita Lockman",
        "genre": "thriller",
        "yearOfPublication": "2002",
        "price": 2044.50,
        "stock": 9
    },
    {
        "id": "74231a55-b264-44a1-a48b-68ed6edd56aa",
        "title": "Mr Standfast",
        "isbnCode": "978287654836017",
        "author": "Dr. Miles Boyle",
        "genre": "poetry",
        "yearOfPublication": "1980",
        "price": 4876.89,
        "stock": 7
    },
    {
        "id": "47358b93-c3b6-4622-9db4-540daf7794ba",
        "title": "A Many-Splendoured Thing",
        "isbnCode": "978648875998152",
        "author": "Cari Swaniawski MD",
        "genre": "thriller",
        "yearOfPublication": "1940",
        "price": 4991.58,
        "stock": 14
    },
    {
        "id": "68ffd391-8fd3-46e7-a2c6-7f88e7b19a14",
        "title": "The Road Less Traveled",
        "isbnCode": "978325142493181",
        "author": "Joan Stark IV",
        "genre": "friction",
        "yearOfPublication": "2015",
        "price": 4329.82,
        "stock": 6
    },
    {
        "id": "f7a7d7e4-49c8-4bd5-a7b3-6706ad0055ae",
        "title": "Edna O'Brien",
        "isbnCode": "978068669057593",
        "author": "Danial Farrell",
        "genre": "friction",
        "yearOfPublication": "1937",
        "price": 4382.56,
        "stock": 1
    },
    {
        "id": "96d6c117-dcbd-413e-91d0-bdd1159f206b",
        "title": "Oh! To be in England",
        "isbnCode": "978950876579636",
        "author": "Gene Hickle",
        "genre": "poetry",
        "yearOfPublication": "1925",
        "price": 3776.01,
        "stock": 2
    },
    {
        "id": "14a1233e-6e2f-44d4-87b3-355cd1a61cdc",
        "title": "The Skull Beneath the Skin",
        "isbnCode": "978350591928082",
        "author": "Torrie Quitzon",
        "genre": "poetry",
        "yearOfPublication": "1961",
        "price": 4906.52,
        "stock": 11
    },
    {
        "id": "40402efe-85a8-4430-9f60-4dc12980db58",
        "title": "Alone on a Wide, Wide Sea",
        "isbnCode": "978829002459893",
        "author": "Rick Kessler",
        "genre": "horror",
        "yearOfPublication": "1990",
        "price": 4524.81,
        "stock": 8
    },
    {
        "id": "ca71e7f8-3515-4067-a3ed-6ca0de4f3c74",
        "title": "The Soldier's Art",
        "isbnCode": "978143936631248",
        "author": "Mrs. Silvia Homenick",
        "genre": "friction",
        "yearOfPublication": "1965",
        "price": 4859.25,
        "stock": 7
    },
    {
        "id": "3ad35bb5-7b7e-4b61-abd4-ae19e4e9c205",
        "title": "Far From the Madding Crowd",
        "isbnCode": "978347482419788",
        "author": "Kaycee Turcotte",
        "genre": "thriller",
        "yearOfPublication": "2020",
        "price": 4597.05,
        "stock": 13
    },
    {
        "id": "86a1d052-810f-419a-9feb-739945e00709",
        "title": "Specimen Days",
        "isbnCode": "978537862494102",
        "author": "Aubrey Hessel III",
        "genre": "friction",
        "yearOfPublication": "1939",
        "price": 4063.89,
        "stock": 6
    },
    {
        "id": "3906fd0d-2df4-4f75-8784-05a71fe06d15",
        "title": "Quo Vadis",
        "isbnCode": "978696706885267",
        "author": "Patria Mante",
        "genre": "horror",
        "yearOfPublication": "2018",
        "price": 2800.66,
        "stock": 3
    },
    {
        "id": "128cb41c-6f22-4d22-89d0-4c18a847cbb9",
        "title": "The Wings of the Dove",
        "isbnCode": "978149050493233",
        "author": "Epifania Hamill III",
        "genre": "poetry",
        "yearOfPublication": "1934",
        "price": 3296.42,
        "stock": 6
    },
    {
        "id": "31f58170-6372-4391-9bec-76e381979c80",
        "title": "The Skull Beneath the Skin",
        "isbnCode": "978126340252997",
        "author": "Miss David Dibbert",
        "genre": "poetry",
        "yearOfPublication": "1998",
        "price": 4891.92,
        "stock": 18
    },
    {
        "id": "d4bd5b84-5980-4a50-ae84-c33042728f69",
        "title": "The Doors of Perception",
        "isbnCode": "978356511239065",
        "author": "Precious Sawayn",
        "genre": "mystery",
        "yearOfPublication": "1956",
        "price": 3768.14,
        "stock": 4
    },
    {
        "id": "2738c310-8283-4dec-a8df-ee203e86ad77",
        "title": "The Line of Beauty",
        "isbnCode": "978829338397490",
        "author": "Ina Murphy",
        "genre": "friction",
        "yearOfPublication": "1925",
        "price": 2840.74,
        "stock": 12
    },
    {
        "id": "9451621d-a696-4e26-9d0b-2ea8f0dd6d73",
        "title": "Dulce et Decorum Est",
        "isbnCode": "978022107909452",
        "author": "Denna Thompson DVM",
        "genre": "friction",
        "yearOfPublication": "1934",
        "price": 4405.91,
        "stock": 9
    },
    {
        "id": "92c6ed07-3b65-4a58-abb0-1ee48a482869",
        "title": "The Far-Distant Oxus",
        "isbnCode": "978239648444392",
        "author": "Wes Crist",
        "genre": "mystery",
        "yearOfPublication": "1950",
        "price": 3428.07,
        "stock": 18
    },
    {
        "id": "15593d00-d9bc-4129-8776-a471d18837b6",
        "title": "The Way Through the Woods",
        "isbnCode": "978306687494025",
        "author": "Hector Kassulke",
        "genre": "poetry",
        "yearOfPublication": "2001",
        "price": 2694.06,
        "stock": 6
    },
    {
        "id": "1da43344-7c62-44ff-bc7e-ac258d2f247b",
        "title": "The Curious Incident of the Dog in the Night-Time",
        "isbnCode": "978088209092994",
        "author": "Elvera Schulist",
        "genre": "poetry",
        "yearOfPublication": "2006",
        "price": 4592.17,
        "stock": 10
    },
    {
        "id": "661c85ec-c04b-4351-bf6a-4bb7eb06e1eb",
        "title": "Such, Such Were the Joys",
        "isbnCode": "978420357444675",
        "author": "Rhonda Block",
        "genre": "mystery",
        "yearOfPublication": "2002",
        "price": 2072.59,
        "stock": 0
    },
    {
        "id": "927639c8-66e9-4dbb-b40c-6f7f50f45de3",
        "title": "Quo Vadis",
        "isbnCode": "978894470457254",
        "author": "Bobbie Kirlin",
        "genre": "mystery",
        "yearOfPublication": "1983",
        "price": 3946.09,
        "stock": 13
    },
    {
        "id": "235334b8-7cfe-4842-9786-c041e32a8f74",
        "title": "O Pioneers!",
        "isbnCode": "978351972420989",
        "author": "Brooke Hane",
        "genre": "mystery",
        "yearOfPublication": "2001",
        "price": 2831.79,
        "stock": 10
    },
    {
        "id": "6b4099a8-aef4-4f74-b2c1-d684645c0c96",
        "title": "Surprised by Joy",
        "isbnCode": "978830483836739",
        "author": "Jesse Stiedemann",
        "genre": "friction",
        "yearOfPublication": "1977",
        "price": 2004.58,
        "stock": 6
    },
    {
        "id": "0c997877-dcdb-4d07-be34-2bf95083bff4",
        "title": "To Your Scattered Bodies Go",
        "isbnCode": "978318417847695",
        "author": "Russell Streich",
        "genre": "horror",
        "yearOfPublication": "1996",
        "price": 2905.62,
        "stock": 8
    },
    {
        "id": "82798f8a-f960-4bbe-a204-0a44440a637f",
        "title": "The Heart Is Deceitful Above All Things",
        "isbnCode": "978427144187538",
        "author": "Dr. Carl Marquardt",
        "genre": "thriller",
        "yearOfPublication": "1965",
        "price": 2306.92,
        "stock": 9
    },
    {
        "id": "6747477d-f056-4a3c-a3e7-6f907b9d729f",
        "title": "The Skull Beneath the Skin",
        "isbnCode": "978779445498671",
        "author": "Dr. Julie Quigley",
        "genre": "friction",
        "yearOfPublication": "1950",
        "price": 2818.00,
        "stock": 5
    },
    {
        "id": "e31669f5-5401-47e5-a1ac-d9c42e8d061b",
        "title": "Moab Is My Washpot",
        "isbnCode": "978536627309701",
        "author": "Lawerence Medhurst",
        "genre": "thriller",
        "yearOfPublication": "1966",
        "price": 4207.40,
        "stock": 16
    },
    {
        "id": "0bb14d40-5445-4428-89fe-6c480cfd8dd1",
        "title": "Where Angels Fear to Tread",
        "isbnCode": "978068048344477",
        "author": "Kermit Kemmer",
        "genre": "friction",
        "yearOfPublication": "1941",
        "price": 3189.94,
        "stock": 11
    },
    {
        "id": "4eda7d80-06cd-4a3b-8bb3-4835c50d28be",
        "title": "The Painted Veil",
        "isbnCode": "978492404922092",
        "author": "Belkis Moen MD",
        "genre": "poetry",
        "yearOfPublication": "2022",
        "price": 3106.77,
        "stock": 18
    },
    {
        "id": "b3e0d22c-ae16-4233-bcd9-d93b84473305",
        "title": "The Green Bay Tree",
        "isbnCode": "978533056181930",
        "author": "Dot Klocko",
        "genre": "friction",
        "yearOfPublication": "1966",
        "price": 4455.33,
        "stock": 5
    },
    {
        "id": "0f4a64bb-5090-4f2a-8b81-9e783a0fee4f",
        "title": "When the Green Woods Laugh",
        "isbnCode": "978144965061292",
        "author": "Terrence Mills",
        "genre": "poetry",
        "yearOfPublication": "2023",
        "price": 4205.77,
        "stock": 18
    },
    {
        "id": "212a5a8d-370a-40f6-ac28-54eb4fecdd50",
        "title": "Dulce et Decorum Est",
        "isbnCode": "978321449574769",
        "author": "Velma Schultz",
        "genre": "friction",
        "yearOfPublication": "1976",
        "price": 2790.18,
        "stock": 7
    },
    {
        "id": "0df93f66-8ec8-424d-a95b-0a5820e5eec8",
        "title": "The Stars' Tennis Balls",
        "isbnCode": "978662699457862",
        "author": "Cierra Corwin",
        "genre": "poetry",
        "yearOfPublication": "1980",
        "price": 4723.85,
        "stock": 7
    },
    {
        "id": "fd2cc0c3-3bde-47a6-8bf2-a10c8c92814b",
        "title": "The Doors of Perception",
        "isbnCode": "978964452367400",
        "author": "Dr. Jackson Huels",
        "genre": "horror",
        "yearOfPublication": "1947",
        "price": 4595.55,
        "stock": 14
    },
    {
        "id": "ba7b4f20-0bd8-4ea5-87e0-55b5bb3a4b82",
        "title": "The Mermaids Singing",
        "isbnCode": "978082639983080",
        "author": "Jack Renner",
        "genre": "poetry",
        "yearOfPublication": "1982",
        "price": 4550.24,
        "stock": 12
    },
    {
        "id": "d5b21a33-d3bb-47c9-a78f-4b1b72787270",
        "title": "Jesting Pilate",
        "isbnCode": "978566396799910",
        "author": "Sung Gottlieb V",
        "genre": "horror",
        "yearOfPublication": "1984",
        "price": 4925.19,
        "stock": 6
    },
    {
        "id": "bb1231e6-b4a2-4376-8844-1ef46f257f5c",
        "title": "His Dark Materials",
        "isbnCode": "978663641437574",
        "author": "Ms. Scottie Schowalter",
        "genre": "poetry",
        "yearOfPublication": "1944",
        "price": 4828.29,
        "stock": 12
    },
    {
        "id": "3e91fa2d-e66e-4859-b6c2-56cc21d91db6",
        "title": "The Glory and the Dream",
        "isbnCode": "978419788119882",
        "author": "Doria Stehr",
        "genre": "thriller",
        "yearOfPublication": "2004",
        "price": 4262.18,
        "stock": 4
    },
    {
        "id": "b694237f-b806-4eca-9a45-d91a2275876f",
        "title": "No Longer at Ease",
        "isbnCode": "978447494349500",
        "author": "Belinda Heathcote DVM",
        "genre": "mystery",
        "yearOfPublication": "2010",
        "price": 4535.10,
        "stock": 6
    },
    {
        "id": "5fdade3e-4606-4712-b4b1-94655d8a0601",
        "title": "The Torment of Others",
        "isbnCode": "978445167196025",
        "author": "Sana Gorczany",
        "genre": "thriller",
        "yearOfPublication": "1951",
        "price": 3539.80,
        "stock": 12
    },
    {
        "id": "99d95722-9469-4526-bd13-6e745a89d734",
        "title": "A Confederacy of Dunces",
        "isbnCode": "978657342217503",
        "author": "Vasiliki Dickinson",
        "genre": "poetry",
        "yearOfPublication": "1970",
        "price": 3461.60,
        "stock": 19
    },
    {
        "id": "b380d435-f859-48bf-b0cc-ffe0b7436a7d",
        "title": "Fair Stood the Wind for France",
        "isbnCode": "978819314937249",
        "author": "Ileen Armstrong",
        "genre": "horror",
        "yearOfPublication": "1968",
        "price": 4929.85,
        "stock": 11
    },
    {
        "id": "212f7e94-356b-4631-aa5d-de79384e4029",
        "title": "Tender Is the Night",
        "isbnCode": "978941256327043",
        "author": "Ms. Joi Bechtelar",
        "genre": "mystery",
        "yearOfPublication": "2018",
        "price": 3820.11,
        "stock": 5
    },
    {
        "id": "36e53867-cd10-47df-ad43-a5f39801262c",
        "title": "That Hideous Strength",
        "isbnCode": "978193100271524",
        "author": "Sean Effertz DDS",
        "genre": "friction",
        "yearOfPublication": "2007",
        "price": 2001.58,
        "stock": 0
    },
    {
        "id": "8fd70892-9669-4645-af90-754264857363",
        "title": "O Pioneers!",
        "isbnCode": "978096555714116",
        "author": "Boris Tillman",
        "genre": "thriller",
        "yearOfPublication": "1990",
        "price": 3619.75,
        "stock": 14
    },
    {
        "id": "9fd769a4-25a4-46e3-adb9-ae156c12feec",
        "title": "East of Eden",
        "isbnCode": "978418029031654",
        "author": "Mrs. Darron Hoppe",
        "genre": "mystery",
        "yearOfPublication": "1948",
        "price": 3827.68,
        "stock": 18
    },
    {
        "id": "6d27eb0d-2d18-49f7-aff6-81a874ea0dc5",
        "title": "The Yellow Meads of Asphodel",
        "isbnCode": "978977396521691",
        "author": "Tawna Vandervort III",
        "genre": "poetry",
        "yearOfPublication": "1961",
        "price": 4242.55,
        "stock": 17
    },
    {
        "id": "018f1754-4d61-4f97-b846-ef245f8fa3a7",
        "title": "The Road Less Traveled",
        "isbnCode": "978978581466988",
        "author": "Mr. Monica Klein",
        "genre": "thriller",
        "yearOfPublication": "1963",
        "price": 2036.08,
        "stock": 0
    },
    {
        "id": "ffbf43d4-f73e-4608-953c-94f4c6aa0503",
        "title": "As I Lay Dying",
        "isbnCode": "978000505704279",
        "author": "Kati Nader",
        "genre": "thriller",
        "yearOfPublication": "1932",
        "price": 4487.91,
        "stock": 1
    },
    {
        "id": "cc2b4902-448a-461b-83ee-c12334b304b2",
        "title": "Such, Such Were the Joys",
        "isbnCode": "978150715826435",
        "author": "Ms. Alycia Stark",
        "genre": "poetry",
        "yearOfPublication": "1933",
        "price": 3864.77,
        "stock": 14
    },
    {
        "id": "7a6c7bf8-2833-4af4-ba20-f20a1d9a4851",
        "title": "O Pioneers!",
        "isbnCode": "978711344891852",
        "author": "Byron Ernser",
        "genre": "mystery",
        "yearOfPublication": "1990",
        "price": 2615.32,
        "stock": 8
    },
    {
        "id": "01f0de04-0b10-4db8-a66a-539c5a9c237b",
        "title": "The Needle's Eye",
        "isbnCode": "978232449779417",
        "author": "Lester MacGyver",
        "genre": "thriller",
        "yearOfPublication": "1995",
        "price": 2184.01,
        "stock": 5
    },
    {
        "id": "a8d15f8f-b7e2-4184-b9fc-3d3954260803",
        "title": "A Scanner Darkly",
        "isbnCode": "978457909298237",
        "author": "Mike Bradtke",
        "genre": "poetry",
        "yearOfPublication": "2007",
        "price": 3334.24,
        "stock": 1
    },
    {
        "id": "ddc32613-1c66-4b91-a5ae-0f41eb74624d",
        "title": "If I Forget Thee Jerusalem",
        "isbnCode": "978122498273920",
        "author": "Sanjuana Harber",
        "genre": "poetry",
        "yearOfPublication": "1955",
        "price": 2553.37,
        "stock": 16
    },
    {
        "id": "61a09fd7-80c8-4dd5-b973-01861d5f36fa",
        "title": "That Good Night",
        "isbnCode": "978758513565985",
        "author": "Kiersten Goodwin",
        "genre": "thriller",
        "yearOfPublication": "1995",
        "price": 4020.21,
        "stock": 16
    },
    {
        "id": "76603081-928c-4038-9988-d581a133b402",
        "title": "Eyeless in Gaza",
        "isbnCode": "978000353235907",
        "author": "Dion Kemmer MD",
        "genre": "mystery",
        "yearOfPublication": "1977",
        "price": 4487.44,
        "stock": 7
    },
    {
        "id": "ee66bd05-a8b9-4c59-a357-9bf881aeac0e",
        "title": "The Road Less Traveled",
        "isbnCode": "978953664245508",
        "author": "Sandee Nader PhD",
        "genre": "friction",
        "yearOfPublication": "1947",
        "price": 3680.62,
        "stock": 6
    },
    {
        "id": "ca35853e-fe4a-44fd-b6e8-bda6c7b9d0ca",
        "title": "The Sun Also Rises",
        "isbnCode": "978365861936217",
        "author": "Marty Monahan",
        "genre": "thriller",
        "yearOfPublication": "2005",
        "price": 3527.34,
        "stock": 2
    },
    {
        "id": "72eed7f6-aa87-4c5e-980f-c49a3f921a11",
        "title": "The Mirror Crack'd from Side to Side",
        "isbnCode": "978549155161933",
        "author": "Donn Heaney",
        "genre": "thriller",
        "yearOfPublication": "1929",
        "price": 4096.92,
        "stock": 16
    },
    {
        "id": "74b554ef-ee8c-4d7f-af83-9b5c955fc3af",
        "title": "The Wings of the Dove",
        "isbnCode": "978563955409824",
        "author": "Alvaro Lueilwitz II",
        "genre": "horror",
        "yearOfPublication": "1929",
        "price": 3620.88,
        "stock": 10
    },
    {
        "id": "c12e420f-a805-4333-9c20-bd48ceb8cac6",
        "title": "Mr Standfast",
        "isbnCode": "978713513138840",
        "author": "Ms. Iris Reynolds",
        "genre": "friction",
        "yearOfPublication": "1928",
        "price": 2163.14,
        "stock": 18
    },
    {
        "id": "a5b2588c-56b4-4299-959f-72410bd280a4",
        "title": "Where Angels Fear to Tread",
        "isbnCode": "978949108861192",
        "author": "Kendall Brekke",
        "genre": "horror",
        "yearOfPublication": "1970",
        "price": 4616.07,
        "stock": 16
    },
    {
        "id": "8158c59d-c312-43ba-8ed1-88f45ec61327",
        "title": "A Monstrous Regiment of Women",
        "isbnCode": "978207837187639",
        "author": "Ms. Ellis Gutkowski",
        "genre": "mystery",
        "yearOfPublication": "1955",
        "price": 2906.91,
        "stock": 9
    },
    {
        "id": "27623160-311e-4803-9b8c-b24dd9fed3f7",
        "title": "Gone with the Wind",
        "isbnCode": "978642620732132",
        "author": "Mr. Salvatore Crooks",
        "genre": "friction",
        "yearOfPublication": "1988",
        "price": 3497.90,
        "stock": 5
    },
    {
        "id": "3759250d-f009-4a84-9e80-8b0616cf0c5b",
        "title": "Tender Is the Night",
        "isbnCode": "978317323462755",
        "author": "Aubrey Ledner DVM",
        "genre": "horror",
        "yearOfPublication": "1924",
        "price": 3874.37,
        "stock": 8
    },
    {
        "id": "06fbeeeb-6c06-4931-bf43-56cbeb911e24",
        "title": "A Glass of Blessings",
        "isbnCode": "978636659856096",
        "author": "Miss Vern Emmerich",
        "genre": "friction",
        "yearOfPublication": "1969",
        "price": 3667.88,
        "stock": 10
    },
    {
        "id": "09f332ef-5f25-41c1-94f3-b0d9a1e9bc8f",
        "title": "I Sing the Body Electric",
        "isbnCode": "978036462193176",
        "author": "Emerson Schamberger",
        "genre": "mystery",
        "yearOfPublication": "1980",
        "price": 2265.85,
        "stock": 0
    },
    {
        "id": "60cc38b1-fbb6-4eca-9db0-7490cf17482b",
        "title": "Bury My Heart at Wounded Knee",
        "isbnCode": "978730982398971",
        "author": "Ms. Octavio Jast",
        "genre": "mystery",
        "yearOfPublication": "1953",
        "price": 3349.64,
        "stock": 16
    },
    {
        "id": "a80231e3-8f17-4139-bfa9-57adf2220cca",
        "title": "Dulce et Decorum Est",
        "isbnCode": "978454015778513",
        "author": "Lupita Emmerich",
        "genre": "friction",
        "yearOfPublication": "1938",
        "price": 4330.77,
        "stock": 10
    },
    {
        "id": "89e9d058-8b8a-423e-af87-7559a22e38ea",
        "title": "Jesting Pilate",
        "isbnCode": "978421467097976",
        "author": "Leann Kuhic",
        "genre": "poetry",
        "yearOfPublication": "1993",
        "price": 2812.40,
        "stock": 11
    },
    {
        "id": "392e1ffd-f964-4067-a8dc-56fc51c619e2",
        "title": "From Here to Eternity",
        "isbnCode": "978425179717989",
        "author": "Felicia Leuschke",
        "genre": "poetry",
        "yearOfPublication": "1967",
        "price": 3531.09,
        "stock": 12
    },
    {
        "id": "86be48db-b921-4b7c-b7b1-f810c5d38de4",
        "title": "The Wives of Bath",
        "isbnCode": "978467045893784",
        "author": "Jan Rodriguez DDS",
        "genre": "mystery",
        "yearOfPublication": "1932",
        "price": 3243.13,
        "stock": 2
    },
    {
        "id": "23f0d227-974d-4be5-b14c-8b05b1e8a718",
        "title": "Vile Bodies",
        "isbnCode": "978072930252734",
        "author": "Boyd Stamm Sr.",
        "genre": "poetry",
        "yearOfPublication": "2018",
        "price": 3909.92,
        "stock": 3
    },
    {
        "id": "e32abf9e-3c09-4c79-8c38-4291983309a9",
        "title": "Fair Stood the Wind for France",
        "isbnCode": "978946953236819",
        "author": "Vicente Goodwin Jr.",
        "genre": "poetry",
        "yearOfPublication": "1944",
        "price": 2348.97,
        "stock": 5
    },
    {
        "id": "3f2ccc32-a3e0-4e90-b0aa-f24df6c12e12",
        "title": "Consider Phlebas",
        "isbnCode": "978148086550251",
        "author": "Meghan Rau Sr.",
        "genre": "mystery",
        "yearOfPublication": "1950",
        "price": 4935.36,
        "stock": 9
    },
    {
        "id": "911d4e32-3116-4f6f-ad8e-fd07ff01298c",
        "title": "Fame Is the Spur",
        "isbnCode": "978207398254654",
        "author": "Christopher Nolan",
        "genre": "poetry",
        "yearOfPublication": "1952",
        "price": 3891.67,
        "stock": 1
    },
    {
        "id": "865348cb-6418-4113-80eb-aca90130a069",
        "title": "Fame Is the Spur",
        "isbnCode": "978441156199692",
        "author": "Tomiko Wisozk",
        "genre": "mystery",
        "yearOfPublication": "2008",
        "price": 4192.07,
        "stock": 18
    },
    {
        "id": "57c20f79-ab1b-4c33-8314-6cfd3b647a1b",
        "title": "An Instant In The Wind",
        "isbnCode": "978743648283699",
        "author": "Ms. Rona Larkin",
        "genre": "horror",
        "yearOfPublication": "2003",
        "price": 3278.43,
        "stock": 7
    },
    {
        "id": "a3efe8d9-adba-4d88-abd0-e2470fc8b106",
        "title": "O Pioneers!",
        "isbnCode": "978979619785539",
        "author": "Mrs. Carmelo Tremblay",
        "genre": "mystery",
        "yearOfPublication": "1942",
        "price": 3429.23,
        "stock": 19
    },
    {
        "id": "aefd274d-e61e-43ac-a9ea-957520e1e4da",
        "title": "All the King's Men",
        "isbnCode": "978597838370136",
        "author": "Doug Larson",
        "genre": "mystery",
        "yearOfPublication": "1992",
        "price": 4077.44,
        "stock": 18
    },
    {
        "id": "b83ffa88-33d4-4005-a849-3b9abddb6ef6",
        "title": "Dying of the Light",
        "isbnCode": "978685565516219",
        "author": "Miss Raymundo Kiehn",
        "genre": "horror",
        "yearOfPublication": "1956",
        "price": 4512.85,
        "stock": 9
    },
    {
        "id": "1060522b-d9c9-40c3-9cca-edaee51ccd47",
        "title": "A Handful of Dust",
        "isbnCode": "978411697949908",
        "author": "Ms. Ernest Ankunding",
        "genre": "friction",
        "yearOfPublication": "1992",
        "price": 3380.65,
        "stock": 8
    },
    {
        "id": "cc8fdc00-acd9-4c12-b14f-3b3fa73a9102",
        "title": "That Good Night",
        "isbnCode": "978856657261312",
        "author": "Lou Roberts DVM",
        "genre": "thriller",
        "yearOfPublication": "2018",
        "price": 4178.71,
        "stock": 10
    },
    {
        "id": "e8f50435-c8c6-4394-8be5-14fba267653b",
        "title": "The Way Through the Woods",
        "isbnCode": "978209309989565",
        "author": "Columbus Legros",
        "genre": "poetry",
        "yearOfPublication": "2021",
        "price": 2688.46,
        "stock": 8
    },
    {
        "id": "8e8e9018-533d-4625-8def-dadad0e0afc1",
        "title": "The Stars' Tennis Balls",
        "isbnCode": "978546448442799",
        "author": "Robby Morar",
        "genre": "poetry",
        "yearOfPublication": "1952",
        "price": 2529.82,
        "stock": 19
    },
    {
        "id": "6cdb32e1-0403-40a3-bfa0-cc176476a06b",
        "title": "Consider the Lilies",
        "isbnCode": "978245430676711",
        "author": "Clark Boyle",
        "genre": "mystery",
        "yearOfPublication": "1980",
        "price": 3638.17,
        "stock": 13
    },
    {
        "id": "9cb8f182-5daa-492b-b3b7-6af064e14b77",
        "title": "Fear and Trembling",
        "isbnCode": "978924000989519",
        "author": "Lyman Harvey",
        "genre": "mystery",
        "yearOfPublication": "1932",
        "price": 2433.97,
        "stock": 12
    },
    {
        "id": "1e6cde20-77eb-4f56-a8b1-d51e426ba2f3",
        "title": "Let Us Now Praise Famous Men",
        "isbnCode": "978717782282006",
        "author": "Nannette Jones",
        "genre": "poetry",
        "yearOfPublication": "2015",
        "price": 2452.21,
        "stock": 13
    },
    {
        "id": "0f29c61a-2d89-4f46-a50b-b63a7ab0f3bf",
        "title": "Moab Is My Washpot",
        "isbnCode": "978263679543497",
        "author": "Deangelo Deckow",
        "genre": "mystery",
        "yearOfPublication": "1981",
        "price": 3498.99,
        "stock": 15
    },
    {
        "id": "5a915703-93f7-46ad-9a17-74fb0dc9580e",
        "title": "Quo Vadis",
        "isbnCode": "978390426951983",
        "author": "Loralee Hermiston V",
        "genre": "poetry",
        "yearOfPublication": "1975",
        "price": 4222.18,
        "stock": 16
    },
    {
        "id": "bc106ceb-8556-44ea-bbf4-7553ac27de9e",
        "title": "Great Work of Time",
        "isbnCode": "978191721935158",
        "author": "Allan Hyatt",
        "genre": "poetry",
        "yearOfPublication": "1958",
        "price": 3677.39,
        "stock": 13
    },
    {
        "id": "d5bd68fb-0427-41d2-b4e8-43b688a6a313",
        "title": "In Death Ground",
        "isbnCode": "978659481275435",
        "author": "Mr. Eduardo Hammes",
        "genre": "poetry",
        "yearOfPublication": "2003",
        "price": 2518.22,
        "stock": 13
    },
    {
        "id": "13a03450-523a-4350-a388-15af36b1bc62",
        "title": "For Whom the Bell Tolls",
        "isbnCode": "978338597607838",
        "author": "Ms. Grady Brown",
        "genre": "thriller",
        "yearOfPublication": "1972",
        "price": 3372.89,
        "stock": 9
    },
    {
        "id": "ee38e4d6-27e2-43b3-aee6-cf50fd85acb7",
        "title": "I Sing the Body Electric",
        "isbnCode": "978212456112874",
        "author": "Hal Ullrich",
        "genre": "mystery",
        "yearOfPublication": "1937",
        "price": 2886.12,
        "stock": 16
    },
    {
        "id": "ceaeafe4-0015-4933-a597-380ed2525c5e",
        "title": "The Violent Bear It Away",
        "isbnCode": "978064277758844",
        "author": "Mathew Bradtke",
        "genre": "friction",
        "yearOfPublication": "1939",
        "price": 3424.21,
        "stock": 11
    },
    {
        "id": "60da406f-7a3e-477f-b3a1-35e9b15d5c27",
        "title": "The Daffodil Sky",
        "isbnCode": "978848165175671",
        "author": "Miss Audrie Gibson",
        "genre": "poetry",
        "yearOfPublication": "1942",
        "price": 3965.15,
        "stock": 0
    },
    {
        "id": "6ee684c5-e90b-4512-bbb7-5f21a426396d",
        "title": "In a Glass Darkly",
        "isbnCode": "978271654360516",
        "author": "Emelda Jast",
        "genre": "poetry",
        "yearOfPublication": "1937",
        "price": 3398.74,
        "stock": 19
    },
    {
        "id": "0fa7ca9a-91bb-4e5f-8728-73151b0da037",
        "title": "Look Homeward, Angel",
        "isbnCode": "978576294763343",
        "author": "Jerome Feeney",
        "genre": "thriller",
        "yearOfPublication": "1927",
        "price": 3940.12,
        "stock": 12
    },
    {
        "id": "175c6514-3ae3-4bac-a1f2-e8f81fb38468",
        "title": "Precious Bane",
        "isbnCode": "978572246944921",
        "author": "Dennis Veum",
        "genre": "thriller",
        "yearOfPublication": "2008",
        "price": 4785.97,
        "stock": 9
    },
    {
        "id": "d24faff0-7062-4adf-906b-3a196791c4f2",
        "title": "The Lathe of Heaven",
        "isbnCode": "978075399448161",
        "author": "Johnette Fahey",
        "genre": "friction",
        "yearOfPublication": "1965",
        "price": 3678.34,
        "stock": 10
    },
    {
        "id": "88c51154-8db2-44c8-b470-71f346b53029",
        "title": "The Far-Distant Oxus",
        "isbnCode": "978655116318480",
        "author": "Lorena Keebler",
        "genre": "mystery",
        "yearOfPublication": "1963",
        "price": 2997.56,
        "stock": 5
    },
    {
        "id": "4de6e46a-9133-4179-b7bc-f9aeaf59bde1",
        "title": "A Swiftly Tilting Planet",
        "isbnCode": "978413796024666",
        "author": "Fredric Bogisich",
        "genre": "thriller",
        "yearOfPublication": "1956",
        "price": 4538.03,
        "stock": 7
    },
    {
        "id": "30bc9881-8931-4ef3-aff9-93992d924aa0",
        "title": "Arms and the Man",
        "isbnCode": "978651145767360",
        "author": "Abram Ziemann",
        "genre": "poetry",
        "yearOfPublication": "2013",
        "price": 3601.62,
        "stock": 18
    },
    {
        "id": "5b6a6a6a-6a0d-4bed-aa59-bf5996aa5137",
        "title": "A Farewell to Arms",
        "isbnCode": "978730529166951",
        "author": "Jacquelin Fritsch IV",
        "genre": "friction",
        "yearOfPublication": "1928",
        "price": 3425.91,
        "stock": 5
    },
    {
        "id": "60ea9a50-963b-40cc-98c6-bb93a16cfb4c",
        "title": "Mr Standfast",
        "isbnCode": "978411562154581",
        "author": "Desmond Mayer",
        "genre": "poetry",
        "yearOfPublication": "2011",
        "price": 2209.43,
        "stock": 19
    },
    {
        "id": "a8320a09-d8bb-43d6-96ca-628f364952cf",
        "title": "An Instant In The Wind",
        "isbnCode": "978075274963731",
        "author": "Miss Elwanda Cruickshank",
        "genre": "poetry",
        "yearOfPublication": "1927",
        "price": 3073.62,
        "stock": 2
    },
    {
        "id": "2b1f9401-7af9-4b77-b7d7-dda23a909fd3",
        "title": "To a God Unknown",
        "isbnCode": "978657009832226",
        "author": "Hal Hyatt",
        "genre": "thriller",
        "yearOfPublication": "1981",
        "price": 3629.48,
        "stock": 4
    },
    {
        "id": "bae7c16c-4ecb-449e-9313-d7e441219244",
        "title": "The Wealth of Nations",
        "isbnCode": "978860835178906",
        "author": "Keven Collins",
        "genre": "horror",
        "yearOfPublication": "1984",
        "price": 4458.27,
        "stock": 7
    },
    {
        "id": "56451d53-c97d-47d1-ad53-40f983719c48",
        "title": "Clouds of Witness",
        "isbnCode": "978877489398621",
        "author": "Arlie Rohan",
        "genre": "mystery",
        "yearOfPublication": "1939",
        "price": 4656.75,
        "stock": 0
    },
    {
        "id": "812f7af9-91d8-4e1d-adc4-547f74fa71a3",
        "title": "Now Sleeps the Crimson Petal",
        "isbnCode": "978284398203963",
        "author": "Deandra Lang",
        "genre": "poetry",
        "yearOfPublication": "1985",
        "price": 2179.63,
        "stock": 3
    },
    {
        "id": "727c9bf4-4fb7-4123-bbe9-3e9aa31523a4",
        "title": "Surprised by Joy",
        "isbnCode": "978951784741114",
        "author": "Ricky O'Conner",
        "genre": "mystery",
        "yearOfPublication": "1986",
        "price": 3726.09,
        "stock": 11
    },
    {
        "id": "e9aba46b-7762-4c74-b274-c2dba68e2a33",
        "title": "Sleep the Brave",
        "isbnCode": "978057419315715",
        "author": "Marry Effertz",
        "genre": "friction",
        "yearOfPublication": "1932",
        "price": 2315.62,
        "stock": 11
    },
    {
        "id": "fdac4ecc-d173-4560-af2c-8395f200f0ab",
        "title": "Alone on a Wide, Wide Sea",
        "isbnCode": "978520558050822",
        "author": "Milda Farrell",
        "genre": "thriller",
        "yearOfPublication": "2022",
        "price": 3905.34,
        "stock": 12
    },
    {
        "id": "d1dbf59a-82e2-48b3-a372-7a4a6c3858b9",
        "title": "No Highway",
        "isbnCode": "978277531821814",
        "author": "Lionel Johns Jr.",
        "genre": "thriller",
        "yearOfPublication": "2018",
        "price": 2257.43,
        "stock": 7
    },
    {
        "id": "592bc40c-8cf9-45af-9066-9ae12b1381e5",
        "title": "I Sing the Body Electric",
        "isbnCode": "978511538830524",
        "author": "Ms. Sebastian Grant",
        "genre": "friction",
        "yearOfPublication": "2015",
        "price": 3517.76,
        "stock": 4
    },
    {
        "id": "c545599d-e64c-43a5-b315-67d5816beaca",
        "title": "Fear and Trembling",
        "isbnCode": "978464282150916",
        "author": "Antoine Flatley",
        "genre": "thriller",
        "yearOfPublication": "1960",
        "price": 3236.85,
        "stock": 10
    },
    {
        "id": "18eed5fc-c9ba-438d-8be2-4cf343b83108",
        "title": "A Confederacy of Dunces",
        "isbnCode": "978729725239748",
        "author": "Fredia Wilderman",
        "genre": "horror",
        "yearOfPublication": "1934",
        "price": 4421.32,
        "stock": 7
    },
    {
        "id": "e91dc91d-3abe-4fe2-8807-4dfc0ed56433",
        "title": "For a Breath I Tarry",
        "isbnCode": "978945814286189",
        "author": "Theron Hamill",
        "genre": "mystery",
        "yearOfPublication": "1985",
        "price": 3058.07,
        "stock": 6
    },
    {
        "id": "890845a0-4d74-43e6-9228-3b48ff980a96",
        "title": "That Good Night",
        "isbnCode": "978661675945467",
        "author": "Dirk Windler III",
        "genre": "thriller",
        "yearOfPublication": "2016",
        "price": 3446.99,
        "stock": 10
    },
    {
        "id": "769ac628-8305-4b26-9648-5ea040a58ef0",
        "title": "Blithe Spirit",
        "isbnCode": "978541797989747",
        "author": "Mireya Kub",
        "genre": "horror",
        "yearOfPublication": "2010",
        "price": 4150.69,
        "stock": 11
    },
    {
        "id": "6568adc4-8824-46bd-8896-4952c30cb09a",
        "title": "No Longer at Ease",
        "isbnCode": "978128959863351",
        "author": "Dr. Maurita Bauch",
        "genre": "friction",
        "yearOfPublication": "1962",
        "price": 2855.04,
        "stock": 1
    },
    {
        "id": "34150d47-62cd-434f-8fdc-e77d8d8c1a0e",
        "title": "Taming a Sea Horse",
        "isbnCode": "978969643931418",
        "author": "Winfred Padberg",
        "genre": "poetry",
        "yearOfPublication": "1990",
        "price": 2125.61,
        "stock": 1
    },
    {
        "id": "8019f009-6032-408d-b298-afe49f196b39",
        "title": "A Darkling Plain",
        "isbnCode": "978116956189242",
        "author": "Marylouise Becker",
        "genre": "horror",
        "yearOfPublication": "1940",
        "price": 4185.79,
        "stock": 7
    },
    {
        "id": "2809e306-b9f8-4e9e-b8f8-22abf9199d40",
        "title": "Consider the Lilies",
        "isbnCode": "978382833771628",
        "author": "Mabelle Kuvalis",
        "genre": "poetry",
        "yearOfPublication": "1994",
        "price": 3341.52,
        "stock": 12
    },
    {
        "id": "fceb6a74-f7d8-4410-8ca5-c531c2ade444",
        "title": "Cover Her Face",
        "isbnCode": "978647487598616",
        "author": "Leonia Reinger III",
        "genre": "thriller",
        "yearOfPublication": "1974",
        "price": 3534.31,
        "stock": 6
    },
    {
        "id": "60095509-ca6a-4e97-85c8-96c81d3e577e",
        "title": "Ego Dominus Tuus",
        "isbnCode": "978499487500644",
        "author": "Hans Hamill",
        "genre": "thriller",
        "yearOfPublication": "2018",
        "price": 4366.01,
        "stock": 13
    },
    {
        "id": "b249845d-be13-4b3d-8a33-d690bfb663ae",
        "title": "Butter In a Lordly Dish",
        "isbnCode": "978787339124184",
        "author": "Cyndy Medhurst",
        "genre": "thriller",
        "yearOfPublication": "1935",
        "price": 4416.44,
        "stock": 17
    },
    {
        "id": "fb241577-d362-4541-b4a6-4e7f6cc21c5b",
        "title": "Shall not Perish",
        "isbnCode": "978666741331075",
        "author": "Mr. Del Koch",
        "genre": "friction",
        "yearOfPublication": "1950",
        "price": 4922.52,
        "stock": 11
    },
    {
        "id": "2361709b-2fc1-4b82-9519-5c88b78d29bc",
        "title": "Mr Standfast",
        "isbnCode": "978131158557088",
        "author": "Jeff Pfannerstill",
        "genre": "poetry",
        "yearOfPublication": "2006",
        "price": 2449.48,
        "stock": 3
    },
    {
        "id": "c09a5cd4-5801-4183-8ec6-b8ff7405e6ec",
        "title": "Jesting Pilate",
        "isbnCode": "978562062642447",
        "author": "Maxine Armstrong",
        "genre": "poetry",
        "yearOfPublication": "1990",
        "price": 2495.20,
        "stock": 8
    },
    {
        "id": "bfed1554-eecc-42df-b23a-762afebddd46",
        "title": "Beneath the Bleeding",
        "isbnCode": "978879667930033",
        "author": "Mr. Mac Okuneva",
        "genre": "horror",
        "yearOfPublication": "2015",
        "price": 4146.32,
        "stock": 12
    },
    {
        "id": "19f25928-a216-481a-bf8e-d3a723ee398e",
        "title": "To a God Unknown",
        "isbnCode": "978106382987966",
        "author": "Armanda O'Connell",
        "genre": "friction",
        "yearOfPublication": "1967",
        "price": 4294.05,
        "stock": 13
    },
    {
        "id": "c8db0e1b-2a14-4307-90c8-21b6a4d79d4a",
        "title": "Time of our Darkness",
        "isbnCode": "978940401183066",
        "author": "Ginger Shanahan",
        "genre": "horror",
        "yearOfPublication": "2002",
        "price": 4602.31,
        "stock": 7
    },
    {
        "id": "88229f10-a66e-43e0-a437-8926b88b4143",
        "title": "Now Sleeps the Crimson Petal",
        "isbnCode": "978571694942133",
        "author": "Marilou Baumbach",
        "genre": "friction",
        "yearOfPublication": "2000",
        "price": 2017.34,
        "stock": 18
    },
    {
        "id": "f7e660df-9318-4c70-a517-0b82e9ad3f72",
        "title": "Waiting for the Barbarians",
        "isbnCode": "978111044644985",
        "author": "Elwood Shields",
        "genre": "horror",
        "yearOfPublication": "1988",
        "price": 4400.64,
        "stock": 9
    },
    {
        "id": "f6382c39-3baf-4854-b233-66ed0c28171a",
        "title": "As I Lay Dying",
        "isbnCode": "978445742303852",
        "author": "Dr. Kelvin Thiel",
        "genre": "mystery",
        "yearOfPublication": "1939",
        "price": 4622.27,
        "stock": 10
    },
    {
        "id": "4aa099e9-6159-4918-b8d3-25ddf6e2d152",
        "title": "The Heart Is Deceitful Above All Things",
        "isbnCode": "978252952925035",
        "author": "Bethel Ryan",
        "genre": "poetry",
        "yearOfPublication": "2017",
        "price": 4771.19,
        "stock": 0
    },
    {
        "id": "468264a5-5e44-467a-be83-84537bb9b58d",
        "title": "Specimen Days",
        "isbnCode": "978674631778107",
        "author": "Lacy Lynch",
        "genre": "poetry",
        "yearOfPublication": "1987",
        "price": 4020.31,
        "stock": 18
    },
    {
        "id": "04ba680c-ec3d-459f-8f4a-f95324b62dec",
        "title": "The Moon by Night",
        "isbnCode": "978954979923831",
        "author": "Mrs. Windy Hansen",
        "genre": "horror",
        "yearOfPublication": "2023",
        "price": 3984.61,
        "stock": 5
    },
    {
        "id": "762801c2-2f6c-4544-a7e8-3a2ecb12512f",
        "title": "Wildfire at Midnight",
        "isbnCode": "978863995086376",
        "author": "Dr. Gwenn Kutch",
        "genre": "horror",
        "yearOfPublication": "2023",
        "price": 4390.36,
        "stock": 19
    },
    {
        "id": "6428279a-4ffc-45dd-a836-284954150c8b",
        "title": "No Highway",
        "isbnCode": "978616209007043",
        "author": "Robbie Mueller DVM",
        "genre": "friction",
        "yearOfPublication": "1977",
        "price": 4974.31,
        "stock": 2
    },
    {
        "id": "1be5f73b-c648-411e-bb38-25b8a44a01f4",
        "title": "Vile Bodies",
        "isbnCode": "978688539463252",
        "author": "Christiane Wuckert",
        "genre": "horror",
        "yearOfPublication": "1933",
        "price": 4800.45,
        "stock": 10
    },
    {
        "id": "7f757850-8b02-44b2-b63f-719cca42f0f4",
        "title": "Fear and Trembling",
        "isbnCode": "978268555331466",
        "author": "Ervin Schmidt",
        "genre": "horror",
        "yearOfPublication": "2007",
        "price": 3151.89,
        "stock": 4
    },
    {
        "id": "13f4d090-5cf1-4961-8090-a0782d999d87",
        "title": "Down to a Sunless Sea",
        "isbnCode": "978795512922902",
        "author": "Alexis Lesch",
        "genre": "mystery",
        "yearOfPublication": "1924",
        "price": 2428.43,
        "stock": 1
    },
    {
        "id": "7cb725ac-f6d5-463b-bd51-e81be41ec219",
        "title": "Recalled to Life",
        "isbnCode": "978418956934473",
        "author": "Julene Rogahn",
        "genre": "poetry",
        "yearOfPublication": "1931",
        "price": 4162.54,
        "stock": 6
    },
    {
        "id": "6915a705-38ca-4644-a91d-0ce8064d5393",
        "title": "Waiting for the Barbarians",
        "isbnCode": "978694805974384",
        "author": "Paul Crooks",
        "genre": "horror",
        "yearOfPublication": "1956",
        "price": 2304.74,
        "stock": 16
    },
    {
        "id": "124e0afb-86cc-4085-8514-759e1d62f322",
        "title": "Let Us Now Praise Famous Men",
        "isbnCode": "978345136962709",
        "author": "Jung Botsford",
        "genre": "mystery",
        "yearOfPublication": "1961",
        "price": 3028.82,
        "stock": 13
    },
    {
        "id": "2e350e86-07e5-4eac-8a0b-6d7ae0a86057",
        "title": "The Needle's Eye",
        "isbnCode": "978421380251344",
        "author": "Maxie Nienow",
        "genre": "friction",
        "yearOfPublication": "1943",
        "price": 3530.04,
        "stock": 15
    },
    {
        "id": "bb8c74b7-35bf-4cf4-97ac-1abdb736577c",
        "title": "The Stars' Tennis Balls",
        "isbnCode": "978988528866826",
        "author": "Ms. Teisha Pagac",
        "genre": "mystery",
        "yearOfPublication": "1976",
        "price": 2812.79,
        "stock": 9
    },
    {
        "id": "5caf981b-ded4-4816-91f2-8f0f6f1f8abf",
        "title": "A Time of Gifts",
        "isbnCode": "978719212997259",
        "author": "Gregory Bins",
        "genre": "mystery",
        "yearOfPublication": "1974",
        "price": 2684.47,
        "stock": 11
    },
    {
        "id": "c1a8aec4-7a67-4592-8f45-553f6d8a4306",
        "title": "Look Homeward, Angel",
        "isbnCode": "978476766849829",
        "author": "Shemika Turcotte",
        "genre": "horror",
        "yearOfPublication": "1996",
        "price": 4414.06,
        "stock": 6
    },
    {
        "id": "d9c909e8-3415-41ad-9fb3-0e25a297f812",
        "title": "A Confederacy of Dunces",
        "isbnCode": "978719170875245",
        "author": "Emile Howe",
        "genre": "friction",
        "yearOfPublication": "1986",
        "price": 3258.13,
        "stock": 19
    },
    {
        "id": "f86b6cf9-65c5-42af-bb27-51f3b7d3cfdd",
        "title": "When the Green Woods Laugh",
        "isbnCode": "978287795662998",
        "author": "Mr. Douglas Hudson",
        "genre": "mystery",
        "yearOfPublication": "2023",
        "price": 4547.04,
        "stock": 7
    },
    {
        "id": "50d201ad-9f93-4304-b50a-b7756d915a62",
        "title": "Endless Night",
        "isbnCode": "978482263160904",
        "author": "Mr. Alberta Stiedemann",
        "genre": "mystery",
        "yearOfPublication": "1925",
        "price": 3580.06,
        "stock": 4
    },
    {
        "id": "93372d30-bec6-4089-9285-ca020bb3ca1b",
        "title": "Clouds of Witness",
        "isbnCode": "978018654567790",
        "author": "Mrs. Donald Lowe",
        "genre": "mystery",
        "yearOfPublication": "2012",
        "price": 4890.49,
        "stock": 9
    },
    {
        "id": "ab68e80c-05b5-499e-897f-2621649d1437",
        "title": "I Will Fear No Evil",
        "isbnCode": "978701333460945",
        "author": "Era Graham",
        "genre": "friction",
        "yearOfPublication": "1959",
        "price": 4202.50,
        "stock": 2
    },
    {
        "id": "0592b4d2-bf35-4241-b776-d169c7b60f65",
        "title": "In Death Ground",
        "isbnCode": "978386515280540",
        "author": "Emely Kerluke I",
        "genre": "horror",
        "yearOfPublication": "2002",
        "price": 2382.31,
        "stock": 11
    },
    {
        "id": "99c49064-1ad3-400c-8152-338433e7ce22",
        "title": "Have His Carcase",
        "isbnCode": "978147446938248",
        "author": "Mr. Garry Metz",
        "genre": "horror",
        "yearOfPublication": "1935",
        "price": 4817.04,
        "stock": 3
    },
    {
        "id": "8f92f17f-fa8a-4771-838b-ead108a4d2e1",
        "title": "Now Sleeps the Crimson Petal",
        "isbnCode": "978640292186330",
        "author": "Marvel Halvorson",
        "genre": "poetry",
        "yearOfPublication": "1983",
        "price": 2760.27,
        "stock": 14
    },
    {
        "id": "15da2c4c-3db1-41f9-98af-f9671dde8a03",
        "title": "The Wings of the Dove",
        "isbnCode": "978090281889567",
        "author": "Brian Mann Jr.",
        "genre": "friction",
        "yearOfPublication": "1980",
        "price": 2918.53,
        "stock": 6
    },
    {
        "id": "eb3f3943-1c68-491f-b59c-c6722326d03f",
        "title": "The Other Side of Silence",
        "isbnCode": "978366821989052",
        "author": "Johna Medhurst PhD",
        "genre": "thriller",
        "yearOfPublication": "1980",
        "price": 4612.39,
        "stock": 4
    },
    {
        "id": "d541df58-3a9f-47aa-a6b7-1fdf7f6592cd",
        "title": "Surprised by Joy",
        "isbnCode": "978234658350058",
        "author": "Clifton Muller V",
        "genre": "horror",
        "yearOfPublication": "1995",
        "price": 2255.72,
        "stock": 1
    },
    {
        "id": "fa778a70-8406-4ee2-9c2a-589133a92d2a",
        "title": "A Many-Splendoured Thing",
        "isbnCode": "978609898171781",
        "author": "Dwain Carter",
        "genre": "poetry",
        "yearOfPublication": "2016",
        "price": 4714.46,
        "stock": 1
    },
    {
        "id": "92b2f4ee-ecba-460d-bbe5-19df4adf6c15",
        "title": "The Far-Distant Oxus",
        "isbnCode": "978179952197296",
        "author": "Libby Witting",
        "genre": "friction",
        "yearOfPublication": "1927",
        "price": 3720.00,
        "stock": 13
    },
    {
        "id": "c875e3e4-d246-42ca-88ab-1be6d66feeaf",
        "title": "Tirra Lirra by the River",
        "isbnCode": "978929543818097",
        "author": "Yanira Kilback",
        "genre": "friction",
        "yearOfPublication": "1945",
        "price": 3219.45,
        "stock": 6
    },
    {
        "id": "97812e56-9132-440b-8d17-a141540788ae",
        "title": "The Heart Is Deceitful Above All Things",
        "isbnCode": "978745784075835",
        "author": "Allegra Hodkiewicz",
        "genre": "horror",
        "yearOfPublication": "1942",
        "price": 4612.29,
        "stock": 3
    },
    {
        "id": "24deee86-fece-4d47-a5dc-b988553ea62d",
        "title": "Such, Such Were the Joys",
        "isbnCode": "978515831806001",
        "author": "Ferdinand McCullough",
        "genre": "horror",
        "yearOfPublication": "1985",
        "price": 4885.79,
        "stock": 16
    },
    {
        "id": "f1ab1d7f-a22b-4f02-8f9c-0469e9b88e6e",
        "title": "The Parliament of Man",
        "isbnCode": "978399615855649",
        "author": "Rona Bins",
        "genre": "mystery",
        "yearOfPublication": "2005",
        "price": 4811.44,
        "stock": 15
    },
    {
        "id": "6c9e9a0c-13ec-4e23-a107-e34b6108f2d6",
        "title": "If Not Now, When?",
        "isbnCode": "978804775436070",
        "author": "Miss Nan Harris",
        "genre": "horror",
        "yearOfPublication": "1941",
        "price": 2918.93,
        "stock": 16
    },
    {
        "id": "192a0287-f10e-4da5-8668-c4836555b7a5",
        "title": "East of Eden",
        "isbnCode": "978407810101842",
        "author": "Ms. Kristina Walker",
        "genre": "thriller",
        "yearOfPublication": "1981",
        "price": 3993.26,
        "stock": 8
    },
    {
        "id": "5facf909-6111-4a41-9823-f67c26215645",
        "title": "Precious Bane",
        "isbnCode": "978697998534680",
        "author": "Reginald Lebsack",
        "genre": "horror",
        "yearOfPublication": "1985",
        "price": 2265.90,
        "stock": 10
    },
    {
        "id": "e8b7586b-51f4-43b9-aa5b-998abebf1d4c",
        "title": "Waiting for the Barbarians",
        "isbnCode": "978722651553972",
        "author": "Emory Daniel",
        "genre": "friction",
        "yearOfPublication": "1938",
        "price": 2150.40,
        "stock": 1
    },
    {
        "id": "ae1f5d52-9266-4f19-9277-cffc09342e74",
        "title": "Consider the Lilies",
        "isbnCode": "978205221389818",
        "author": "Angla Padberg",
        "genre": "friction",
        "yearOfPublication": "2015",
        "price": 3806.72,
        "stock": 18
    },
    {
        "id": "168939e7-33de-4162-8d69-2306b3ab7ce2",
        "title": "After Many a Summer Dies the Swan",
        "isbnCode": "978491958789150",
        "author": "Mrs. Walter Crona",
        "genre": "mystery",
        "yearOfPublication": "1944",
        "price": 2059.00,
        "stock": 8
    },
    {
        "id": "7a3886c9-f610-4625-8a71-cd79c9ae8650",
        "title": "Ego Dominus Tuus",
        "isbnCode": "978311625232857",
        "author": "Tu Gislason",
        "genre": "mystery",
        "yearOfPublication": "1967",
        "price": 3274.84,
        "stock": 18
    },
    {
        "id": "6a65fe86-6ce3-4449-bd46-200c4c4777a6",
        "title": "Tiger! Tiger!",
        "isbnCode": "978860814454838",
        "author": "Mr. Kayla Quitzon",
        "genre": "horror",
        "yearOfPublication": "2009",
        "price": 2020.38,
        "stock": 9
    },
    {
        "id": "886f0db1-f27e-4d36-ade0-bd46952dbd84",
        "title": "A Time of Gifts",
        "isbnCode": "978533927894518",
        "author": "Ms. Nelida Harris",
        "genre": "horror",
        "yearOfPublication": "2010",
        "price": 3731.37,
        "stock": 12
    },
    {
        "id": "dbe4d805-2aec-4919-83ee-f68012cf241b",
        "title": "The Way Through the Woods",
        "isbnCode": "978047504166481",
        "author": "Dalton Hansen",
        "genre": "friction",
        "yearOfPublication": "1944",
        "price": 3198.47,
        "stock": 1
    },
    {
        "id": "814f30a3-5e48-4730-b86c-fa0acd0e87ee",
        "title": "Alone on a Wide, Wide Sea",
        "isbnCode": "978807336657925",
        "author": "Mrs. Emile Hudson",
        "genre": "poetry",
        "yearOfPublication": "1979",
        "price": 2024.41,
        "stock": 15
    },
    {
        "id": "abe08dfd-d4be-428a-8c36-7f00435a1fd7",
        "title": "Those Barren Leaves, Thrones, Dominations",
        "isbnCode": "978777140347526",
        "author": "Wan Windler",
        "genre": "horror",
        "yearOfPublication": "1934",
        "price": 4924.53,
        "stock": 11
    },
    {
        "id": "cb55124f-fe25-449d-bd27-f3abd0fa71a8",
        "title": "Jacob Have I Loved",
        "isbnCode": "978531366355525",
        "author": "Jeffie Schimmel",
        "genre": "friction",
        "yearOfPublication": "1939",
        "price": 3134.52,
        "stock": 5
    },
    {
        "id": "01848b71-81af-4b26-a4cd-8c4e822283f8",
        "title": "Brandy of the Damned",
        "isbnCode": "978915018165104",
        "author": "Keith Wuckert",
        "genre": "horror",
        "yearOfPublication": "1986",
        "price": 3087.34,
        "stock": 12
    },
    {
        "id": "fecb4f08-682e-48fb-bda4-a71c0a016740",
        "title": "The Sun Also Rises",
        "isbnCode": "978474579090027",
        "author": "Philip Wilkinson III",
        "genre": "mystery",
        "yearOfPublication": "1974",
        "price": 4204.15,
        "stock": 9
    },
    {
        "id": "06b7567d-a3b7-4ee6-bde8-4429461d2b93",
        "title": "The Daffodil Sky",
        "isbnCode": "978857142754509",
        "author": "Sharda Turcotte",
        "genre": "poetry",
        "yearOfPublication": "1931",
        "price": 2792.17,
        "stock": 15
    },
    {
        "id": "e40e1f3b-dca1-4909-b2dd-2191d2375c1b",
        "title": "Things Fall Apart",
        "isbnCode": "978865675338449",
        "author": "Joseph Watsica",
        "genre": "poetry",
        "yearOfPublication": "1938",
        "price": 2813.61,
        "stock": 18
    },
    {
        "id": "7202b40c-2e96-4553-8f1f-9c3dc693328f",
        "title": "A Passage to India",
        "isbnCode": "978399458860550",
        "author": "Dr. Edna Kautzer",
        "genre": "horror",
        "yearOfPublication": "2016",
        "price": 3695.98,
        "stock": 18
    },
    {
        "id": "3307294b-558e-45c4-86dc-37a2a290a745",
        "title": "Cover Her Face",
        "isbnCode": "978075056494396",
        "author": "Julieann Effertz",
        "genre": "poetry",
        "yearOfPublication": "2001",
        "price": 2089.94,
        "stock": 5
    },
    {
        "id": "57fe29bd-231a-4528-aec0-61d37bc22600",
        "title": "In a Dry Season",
        "isbnCode": "978686142783975",
        "author": "Dr. Floy Mayer",
        "genre": "poetry",
        "yearOfPublication": "1953",
        "price": 2029.52,
        "stock": 16
    },
    {
        "id": "3a37c618-e603-4378-841d-9921b0ec1bf8",
        "title": "The Green Bay Tree",
        "isbnCode": "978737196374645",
        "author": "Fredrick Stracke",
        "genre": "mystery",
        "yearOfPublication": "1932",
        "price": 3794.53,
        "stock": 18
    },
    {
        "id": "b8da970e-292d-4667-8767-66a91dcc2d5a",
        "title": "Postern of Fate",
        "isbnCode": "978564304159817",
        "author": "Fay Wisozk",
        "genre": "thriller",
        "yearOfPublication": "2013",
        "price": 3697.19,
        "stock": 9
    },
    {
        "id": "1a72a3aa-eaea-4309-87e0-2543f7632d4d",
        "title": "Clouds of Witness",
        "isbnCode": "978349182994887",
        "author": "Keila Graham",
        "genre": "friction",
        "yearOfPublication": "1975",
        "price": 2135.59,
        "stock": 15
    },
    {
        "id": "e2f9fe5c-3b3f-4ab4-bb9d-2919319d79f8",
        "title": "A Farewell to Arms",
        "isbnCode": "978411732689995",
        "author": "Buster Koelpin",
        "genre": "thriller",
        "yearOfPublication": "1963",
        "price": 3985.55,
        "stock": 17
    },
    {
        "id": "f1671ccb-e6e6-4e87-9f48-e201c9782daa",
        "title": "The House of Mirth",
        "isbnCode": "978365468471160",
        "author": "Georgina Abshire",
        "genre": "friction",
        "yearOfPublication": "1977",
        "price": 3240.30,
        "stock": 15
    },
    {
        "id": "01547c65-6333-437a-84ca-022be4b153d2",
        "title": "Tender Is the Night",
        "isbnCode": "978365210663154",
        "author": "Genaro Boyer",
        "genre": "mystery",
        "yearOfPublication": "2008",
        "price": 4275.15,
        "stock": 11
    },
    {
        "id": "9df72069-8def-458d-921e-4f4025cec487",
        "title": "Rosemary Sutcliff",
        "isbnCode": "978115366355867",
        "author": "Conchita Bernhard",
        "genre": "thriller",
        "yearOfPublication": "2012",
        "price": 3423.71,
        "stock": 8
    },
    {
        "id": "03c33a10-c35b-4eee-a599-7f777e80bb85",
        "title": "Carrion Comfort",
        "isbnCode": "978955027110498",
        "author": "Rosalba Leffler IV",
        "genre": "friction",
        "yearOfPublication": "1938",
        "price": 2103.76,
        "stock": 1
    },
    {
        "id": "bd6b6bdc-19b2-41b2-9981-04977635b21b",
        "title": "A Confederacy of Dunces",
        "isbnCode": "978803303336453",
        "author": "Paulette Wolff",
        "genre": "horror",
        "yearOfPublication": "1930",
        "price": 3403.42,
        "stock": 12
    },
    {
        "id": "b4e24cc8-ee14-47f1-9e05-a55748b47b0e",
        "title": "A Darkling Plain",
        "isbnCode": "978196316755759",
        "author": "Raymundo Huels PhD",
        "genre": "poetry",
        "yearOfPublication": "1930",
        "price": 4899.56,
        "stock": 1
    },
    {
        "id": "a8b5d9c3-cd7a-4fec-8868-8cb815cf52f0",
        "title": "Those Barren Leaves, Thrones, Dominations",
        "isbnCode": "978319170723221",
        "author": "Hilda Lakin",
        "genre": "friction",
        "yearOfPublication": "1958",
        "price": 4450.56,
        "stock": 12
    },
    {
        "id": "018965fd-5017-4f09-a26c-6578708b1345",
        "title": "The Cricket on the Hearth",
        "isbnCode": "978531457676812",
        "author": "Krystal Pfeffer",
        "genre": "mystery",
        "yearOfPublication": "1966",
        "price": 3644.67,
        "stock": 18
    },
    {
        "id": "107f49cb-e028-4ac9-a1da-a9bdbc123a87",
        "title": "That Good Night",
        "isbnCode": "978229371310392",
        "author": "Gabriel Langosh",
        "genre": "mystery",
        "yearOfPublication": "1994",
        "price": 3430.13,
        "stock": 19
    },
    {
        "id": "4834d33b-bf2b-4a70-a10f-007d3f3a7017",
        "title": "The Millstone",
        "isbnCode": "978087159170478",
        "author": "Morgan Boyer",
        "genre": "friction",
        "yearOfPublication": "1930",
        "price": 3249.12,
        "stock": 0
    },
    {
        "id": "6a232916-7262-44ce-81dd-5b4b2e0bbd7a",
        "title": "As I Lay Dying",
        "isbnCode": "978475651066742",
        "author": "Jimmie Schuppe",
        "genre": "horror",
        "yearOfPublication": "2003",
        "price": 4656.27,
        "stock": 1
    },
    {
        "id": "a8ee4c03-02b2-4b7e-b9d6-442868cf96a5",
        "title": "Rosemary Sutcliff",
        "isbnCode": "978200777540442",
        "author": "Erick Gibson IV",
        "genre": "friction",
        "yearOfPublication": "2012",
        "price": 2081.45,
        "stock": 4
    },
    {
        "id": "fdba37f7-28fa-42ee-a2ad-110f2677d267",
        "title": "Ah, Wilderness!",
        "isbnCode": "978174654353302",
        "author": "Randall Farrell",
        "genre": "poetry",
        "yearOfPublication": "2017",
        "price": 3553.53,
        "stock": 7
    },
    {
        "id": "3bc486cf-a1d1-46b7-949b-a9d8c1a27d56",
        "title": "The Road Less Traveled",
        "isbnCode": "978490934355840",
        "author": "Teisha Bernhard I",
        "genre": "horror",
        "yearOfPublication": "1962",
        "price": 4916.59,
        "stock": 8
    },
    {
        "id": "d5572f67-023d-4c81-9be7-5d23dc125909",
        "title": "The Waste Land",
        "isbnCode": "978572559371986",
        "author": "Shanita Grady",
        "genre": "thriller",
        "yearOfPublication": "1969",
        "price": 2600.74,
        "stock": 18
    },
    {
        "id": "d105ea3d-60c0-4efc-987b-8bd95c93e5f8",
        "title": "Lilies of the Field",
        "isbnCode": "978744699898876",
        "author": "Rich Schowalter MD",
        "genre": "poetry",
        "yearOfPublication": "1925",
        "price": 4311.68,
        "stock": 8
    },
    {
        "id": "49580002-eb11-4ad2-9b58-773e24661588",
        "title": "The Moving Finger",
        "isbnCode": "978854608158455",
        "author": "Glendora Huel",
        "genre": "friction",
        "yearOfPublication": "1924",
        "price": 4525.30,
        "stock": 13
    },
    {
        "id": "27c2ed1d-61c1-4930-b56e-22c0bea09702",
        "title": "Françoise Sagan",
        "isbnCode": "978656623122905",
        "author": "Berenice Reichert",
        "genre": "friction",
        "yearOfPublication": "1996",
        "price": 4768.42,
        "stock": 10
    },
    {
        "id": "2d27ce3c-7d66-4364-9e38-041958f6e518",
        "title": "Number the Stars",
        "isbnCode": "978360615543075",
        "author": "Brice Paucek",
        "genre": "horror",
        "yearOfPublication": "1997",
        "price": 4564.26,
        "stock": 16
    },
    {
        "id": "c08220ce-7d16-4cd3-8876-81f7a81ae8f8",
        "title": "Tirra Lirra by the River",
        "isbnCode": "978640458892054",
        "author": "Gregg Littel",
        "genre": "horror",
        "yearOfPublication": "1938",
        "price": 3286.62,
        "stock": 13
    },
    {
        "id": "6a1461a0-0939-45fd-a3a2-40fe35a9c076",
        "title": "As I Lay Dying",
        "isbnCode": "978916792172164",
        "author": "Ezequiel Dickens II",
        "genre": "horror",
        "yearOfPublication": "1979",
        "price": 4595.67,
        "stock": 19
    },
    {
        "id": "e3a192a6-732d-4ba6-8499-c6ea6959e2be",
        "title": "Dulce et Decorum Est",
        "isbnCode": "978031989601653",
        "author": "Marvella Jones",
        "genre": "horror",
        "yearOfPublication": "1982",
        "price": 3588.31,
        "stock": 9
    },
    {
        "id": "b61312dc-8162-416c-907b-85993ec3b4b1",
        "title": "Arms and the Man",
        "isbnCode": "978502508444720",
        "author": "Kimber Cremin",
        "genre": "horror",
        "yearOfPublication": "2003",
        "price": 3701.01,
        "stock": 6
    },
    {
        "id": "513a4d93-d585-465c-b93d-99736502e13f",
        "title": "No Longer at Ease",
        "isbnCode": "978624419776458",
        "author": "Sharell Botsford",
        "genre": "thriller",
        "yearOfPublication": "1989",
        "price": 2846.59,
        "stock": 6
    },
    {
        "id": "43d26756-3298-42f1-a0f7-25372ad2dd52",
        "title": "In a Glass Darkly",
        "isbnCode": "978489833431347",
        "author": "Chara Smith",
        "genre": "mystery",
        "yearOfPublication": "1957",
        "price": 4746.45,
        "stock": 10
    },
    {
        "id": "96b906f7-ceef-4053-aa60-1291d61cc7a6",
        "title": "The Mirror Crack'd from Side to Side",
        "isbnCode": "978711252322631",
        "author": "Elisha Hansen",
        "genre": "thriller",
        "yearOfPublication": "1959",
        "price": 4994.37,
        "stock": 5
    },
    {
        "id": "92e23612-1ae2-4723-a39e-68b75bbe6de7",
        "title": "Infinite Jest",
        "isbnCode": "978829286848615",
        "author": "Dr. Forrest Daugherty",
        "genre": "friction",
        "yearOfPublication": "1948",
        "price": 2155.84,
        "stock": 5
    },
    {
        "id": "221f3650-f617-4207-a9fd-3bda5c0718b6",
        "title": "Waiting for the Barbarians",
        "isbnCode": "978671345456019",
        "author": "Jamal Conn V",
        "genre": "friction",
        "yearOfPublication": "2016",
        "price": 4334.62,
        "stock": 13
    },
    {
        "id": "b2012304-c4da-4627-9ec4-6381b53f7d7b",
        "title": "Pale Kings and Princes",
        "isbnCode": "978041621581746",
        "author": "Wayne Hilpert PhD",
        "genre": "horror",
        "yearOfPublication": "2019",
        "price": 4690.22,
        "stock": 1
    },
    {
        "id": "903bce8e-d2fe-4d6a-8c0d-7fa7a88f733f",
        "title": "Françoise Sagan",
        "isbnCode": "978157402886397",
        "author": "Van Brakus III",
        "genre": "horror",
        "yearOfPublication": "1947",
        "price": 2681.69,
        "stock": 5
    },
    {
        "id": "134dbbda-95ca-4ecd-982b-b0f5f9e5e0b6",
        "title": "An Acceptable Time",
        "isbnCode": "978385692465832",
        "author": "Sage Brekke",
        "genre": "poetry",
        "yearOfPublication": "2003",
        "price": 3040.20,
        "stock": 14
    },
    {
        "id": "050a2944-b00c-4952-81ab-869a88e6a23d",
        "title": "Carrion Comfort",
        "isbnCode": "978930181230447",
        "author": "Juliane Conroy",
        "genre": "horror",
        "yearOfPublication": "1933",
        "price": 2197.21,
        "stock": 4
    },
    {
        "id": "62ee590c-fd10-4bd5-9043-f591678dc3e3",
        "title": "The Golden Bowl",
        "isbnCode": "978908867832165",
        "author": "Mrs. Francina Cremin",
        "genre": "horror",
        "yearOfPublication": "1959",
        "price": 4501.43,
        "stock": 12
    },
    {
        "id": "91ee7ac3-6dab-4d48-8728-72b47b4948e0",
        "title": "The Painted Veil",
        "isbnCode": "978793613434844",
        "author": "Shirleen White",
        "genre": "poetry",
        "yearOfPublication": "2011",
        "price": 2857.22,
        "stock": 7
    },
    {
        "id": "21078f88-324e-4988-9380-6f864653157a",
        "title": "Sleep the Brave",
        "isbnCode": "978838604003482",
        "author": "Dr. Mose Graham",
        "genre": "mystery",
        "yearOfPublication": "1982",
        "price": 3299.23,
        "stock": 0
    },
    {
        "id": "1f2e400d-d686-4277-a97a-d61b748a93b0",
        "title": "All Passion Spent",
        "isbnCode": "978094665474121",
        "author": "Susanna Bauch",
        "genre": "thriller",
        "yearOfPublication": "2000",
        "price": 2300.10,
        "stock": 10
    },
    {
        "id": "ec2177b0-e00c-4095-8079-28fa8096c496",
        "title": "The Heart Is Deceitful Above All Things",
        "isbnCode": "978729931935048",
        "author": "Latonia Johnston",
        "genre": "friction",
        "yearOfPublication": "1938",
        "price": 2199.54,
        "stock": 19
    },
    {
        "id": "11a62588-b29e-4226-867f-7a460ae43b38",
        "title": "The Wealth of Nations",
        "isbnCode": "978883248295519",
        "author": "Guadalupe Rolfson",
        "genre": "thriller",
        "yearOfPublication": "1927",
        "price": 2760.15,
        "stock": 13
    },
    {
        "id": "e96eb40f-74b3-41c4-b862-dbaf807a0f31",
        "title": "Postern of Fate",
        "isbnCode": "978927222097732",
        "author": "Dr. Junie Barton",
        "genre": "friction",
        "yearOfPublication": "1960",
        "price": 2226.03,
        "stock": 15
    },
    {
        "id": "fe89bc4b-90c8-440d-bf1c-c498d4b898bf",
        "title": "Some Buried Caesar",
        "isbnCode": "978052999972586",
        "author": "Lenard Koepp",
        "genre": "friction",
        "yearOfPublication": "1953",
        "price": 3629.83,
        "stock": 10
    },
    {
        "id": "65da73ed-536e-48dd-9cba-cfa936304777",
        "title": "No Longer at Ease",
        "isbnCode": "978468936819404",
        "author": "Toby Lynch",
        "genre": "friction",
        "yearOfPublication": "1928",
        "price": 4891.23,
        "stock": 0
    },
    {
        "id": "afbed084-3125-49a4-aa02-e4df32417d4c",
        "title": "Brandy of the Damned",
        "isbnCode": "978020972894383",
        "author": "Rickie Tremblay",
        "genre": "thriller",
        "yearOfPublication": "1985",
        "price": 3278.84,
        "stock": 10
    },
    {
        "id": "f0d94492-bf4c-4100-b9ce-4359f6f7a7d7",
        "title": "Beyond the Mexique Bay",
        "isbnCode": "978769760839889",
        "author": "Cody Legros",
        "genre": "mystery",
        "yearOfPublication": "2016",
        "price": 2378.64,
        "stock": 11
    },
    {
        "id": "02abc3bd-e75d-4528-950b-c6eeb02856ac",
        "title": "Jacob Have I Loved",
        "isbnCode": "978935398962300",
        "author": "Madaline Stanton DVM",
        "genre": "mystery",
        "yearOfPublication": "1994",
        "price": 3643.08,
        "stock": 17
    },
    {
        "id": "7cc0ab0a-d1cc-4866-bec5-64bf639b4eec",
        "title": "In a Dry Season",
        "isbnCode": "978144282879537",
        "author": "Ms. Tama Pollich",
        "genre": "horror",
        "yearOfPublication": "1927",
        "price": 3885.98,
        "stock": 16
    },
    {
        "id": "31138fdc-81ed-47d3-aa58-feeb44b520a2",
        "title": "The Cricket on the Hearth",
        "isbnCode": "978153655899949",
        "author": "Will Sawayn",
        "genre": "horror",
        "yearOfPublication": "1974",
        "price": 4702.56,
        "stock": 8
    },
    {
        "id": "e69753d6-0bb8-4843-8951-32c6755a0100",
        "title": "An Evil Cradling",
        "isbnCode": "978967303948177",
        "author": "Theodora Brakus MD",
        "genre": "horror",
        "yearOfPublication": "1976",
        "price": 3416.50,
        "stock": 7
    },
    {
        "id": "06892531-1f3f-4839-bbce-f2c0dfcb31d4",
        "title": "No Country for Old Men",
        "isbnCode": "978360548022154",
        "author": "Rebekah Olson",
        "genre": "mystery",
        "yearOfPublication": "1941",
        "price": 4045.40,
        "stock": 17
    },
    {
        "id": "8fd2a478-b78a-4f27-97e2-d866af77bc92",
        "title": "Gone with the Wind",
        "isbnCode": "978043203859948",
        "author": "Mr. Regenia Walter",
        "genre": "poetry",
        "yearOfPublication": "1955",
        "price": 4121.50,
        "stock": 2
    },
    {
        "id": "fa03f01b-0ad1-4874-b3c9-febdb73f6f27",
        "title": "The Parliament of Man",
        "isbnCode": "978883736906064",
        "author": "Brooks Witting DVM",
        "genre": "thriller",
        "yearOfPublication": "2003",
        "price": 4644.70,
        "stock": 14
    },
    {
        "id": "abdddcb5-a27c-4a97-9f5b-5b5a5ca38fef",
        "title": "Infinite Jest",
        "isbnCode": "978494700457734",
        "author": "Miss Ivan Skiles",
        "genre": "horror",
        "yearOfPublication": "1924",
        "price": 3620.39,
        "stock": 16
    },
    {
        "id": "954873f5-6138-4501-9909-0d478ed4a8ba",
        "title": "The Little Foxes",
        "isbnCode": "978020858432728",
        "author": "Dr. Crista Marks",
        "genre": "thriller",
        "yearOfPublication": "1946",
        "price": 4088.97,
        "stock": 10
    },
    {
        "id": "42569058-bd21-4698-9553-2e2943119951",
        "title": "The Wings of the Dove",
        "isbnCode": "978604289072034",
        "author": "Rolando Weissnat",
        "genre": "thriller",
        "yearOfPublication": "1940",
        "price": 3844.42,
        "stock": 11
    },
    {
        "id": "2230a99d-8d9a-4f68-b3c2-a00e7ab1566f",
        "title": "Ring of Bright Water",
        "isbnCode": "978204024172928",
        "author": "Graciela Hirthe",
        "genre": "friction",
        "yearOfPublication": "2021",
        "price": 4940.05,
        "stock": 18
    },
    {
        "id": "2ec61fdc-f038-4971-b153-10bc2efea436",
        "title": "The Heart Is a Lonely Hunter",
        "isbnCode": "978459097946285",
        "author": "Rubin Mills IV",
        "genre": "mystery",
        "yearOfPublication": "1947",
        "price": 2598.58,
        "stock": 17
    },
    {
        "id": "ff4d2e6c-a8a1-4a91-b048-7d206cfd6b56",
        "title": "Consider the Lilies",
        "isbnCode": "978479118436361",
        "author": "Oscar Klein",
        "genre": "poetry",
        "yearOfPublication": "2012",
        "price": 4892.50,
        "stock": 0
    },
    {
        "id": "98c88eb0-b9cb-4174-8e58-3f7e74d81be4",
        "title": "The Last Enemy",
        "isbnCode": "978674463525338",
        "author": "Deon Barton",
        "genre": "thriller",
        "yearOfPublication": "1924",
        "price": 4055.21,
        "stock": 2
    },
    {
        "id": "530f2fac-b39b-41fb-abd5-54eb23fa2639",
        "title": "All Passion Spent",
        "isbnCode": "978552578274007",
        "author": "Wiley Hansen",
        "genre": "mystery",
        "yearOfPublication": "2019",
        "price": 2664.70,
        "stock": 16
    },
    {
        "id": "0cbe1e6b-cffb-4359-b1e8-94deb6d72a0a",
        "title": "Paths of Glory",
        "isbnCode": "978646763386399",
        "author": "Maude McDermott IV",
        "genre": "poetry",
        "yearOfPublication": "2020",
        "price": 4391.77,
        "stock": 2
    },
    {
        "id": "1c85b246-07e3-4cbb-aad4-9f6f183b973b",
        "title": "Bury My Heart at Wounded Knee",
        "isbnCode": "978938978445329",
        "author": "Miss Noah Sauer",
        "genre": "horror",
        "yearOfPublication": "1973",
        "price": 4117.20,
        "stock": 2
    },
    {
        "id": "a0fe6e6d-7ba5-4705-b51a-703797ba04bf",
        "title": "The Millstone",
        "isbnCode": "978032168918044",
        "author": "Felicidad Trantow",
        "genre": "thriller",
        "yearOfPublication": "2012",
        "price": 3193.73,
        "stock": 11
    },
    {
        "id": "edec7fe1-9cb0-4e09-993f-a4a76ef9b2c8",
        "title": "Number the Stars",
        "isbnCode": "978257663752861",
        "author": "Dr. Efrain Boyer",
        "genre": "friction",
        "yearOfPublication": "1935",
        "price": 4573.78,
        "stock": 9
    },
    {
        "id": "417a9fcd-fe20-4515-b26c-8b9593b310a4",
        "title": "To Sail Beyond the Sunset",
        "isbnCode": "978353142969804",
        "author": "Garret Bode",
        "genre": "thriller",
        "yearOfPublication": "1935",
        "price": 2935.72,
        "stock": 9
    },
    {
        "id": "1d1a60b4-2393-4214-ae71-2005478e2e78",
        "title": "Oh! To be in England",
        "isbnCode": "978560329538041",
        "author": "Nella Ledner",
        "genre": "friction",
        "yearOfPublication": "2013",
        "price": 3394.84,
        "stock": 3
    },
    {
        "id": "5ea3c01d-e75e-4ebf-bb3a-712a5b6fd455",
        "title": "The Road Less Traveled",
        "isbnCode": "978691894584278",
        "author": "Miss Stanford Douglas",
        "genre": "horror",
        "yearOfPublication": "2018",
        "price": 2129.40,
        "stock": 2
    },
    {
        "id": "3c81b201-6a92-47c3-b21b-8efba30894fd",
        "title": "The Way of All Flesh",
        "isbnCode": "978910010132379",
        "author": "Majorie Lindgren IV",
        "genre": "friction",
        "yearOfPublication": "2015",
        "price": 2680.69,
        "stock": 8
    },
    {
        "id": "035ca622-e016-49e8-8769-1cc00b084c29",
        "title": "The Way Through the Woods",
        "isbnCode": "978086651107440",
        "author": "Janyce Stroman",
        "genre": "thriller",
        "yearOfPublication": "1975",
        "price": 3470.82,
        "stock": 7
    },
    {
        "id": "a8bab486-4bb7-4b44-98ee-87ac43f38e88",
        "title": "Frequent Hearses",
        "isbnCode": "978691934523274",
        "author": "Davis Hoeger",
        "genre": "poetry",
        "yearOfPublication": "2012",
        "price": 3836.08,
        "stock": 12
    },
    {
        "id": "80b6cace-43ac-4999-ac77-d846ee8131c1",
        "title": "Clouds of Witness",
        "isbnCode": "978843096357787",
        "author": "Clemente Raynor",
        "genre": "poetry",
        "yearOfPublication": "1992",
        "price": 4067.21,
        "stock": 18
    },
    {
        "id": "06e8eacc-15c0-4388-b490-9616208ec365",
        "title": "A Time to Kill",
        "isbnCode": "978419379037105",
        "author": "Robyn Blick",
        "genre": "mystery",
        "yearOfPublication": "1946",
        "price": 3458.42,
        "stock": 16
    },
    {
        "id": "533a41f3-bedc-4e11-b7e9-5284f1ba2673",
        "title": "What's Become of Waring",
        "isbnCode": "978457702408789",
        "author": "Misti Daniel DDS",
        "genre": "horror",
        "yearOfPublication": "1951",
        "price": 2096.55,
        "stock": 15
    },
    {
        "id": "035742df-6cce-4941-a36f-a72f66f39e12",
        "title": "The Wives of Bath",
        "isbnCode": "978019938168975",
        "author": "Mr. Luciano Schmidt",
        "genre": "horror",
        "yearOfPublication": "2000",
        "price": 3432.24,
        "stock": 11
    },
    {
        "id": "992eee6c-b667-4ec6-83ef-ba4d29fdf684",
        "title": "Sleep the Brave",
        "isbnCode": "978014855065120",
        "author": "Kevin Borer DVM",
        "genre": "mystery",
        "yearOfPublication": "1955",
        "price": 4494.42,
        "stock": 0
    },
    {
        "id": "be55d16c-9fdd-48ff-bfb3-97ea92690939",
        "title": "Sleep the Brave",
        "isbnCode": "978786567919710",
        "author": "Rayford Robel",
        "genre": "mystery",
        "yearOfPublication": "1930",
        "price": 3442.44,
        "stock": 19
    },
    {
        "id": "5380edb2-cf2e-4665-b61f-a0486b667a99",
        "title": "Lilies of the Field",
        "isbnCode": "978790652854368",
        "author": "Mack Hansen",
        "genre": "thriller",
        "yearOfPublication": "2008",
        "price": 3195.77,
        "stock": 16
    },
    {
        "id": "756f7aa9-7f09-43a0-b616-7ba593e51cca",
        "title": "The Wind's Twelve Quarters",
        "isbnCode": "978567733213395",
        "author": "Mrs. Lizabeth Reichel",
        "genre": "thriller",
        "yearOfPublication": "2023",
        "price": 2824.13,
        "stock": 19
    },
    {
        "id": "1cc8e4de-2ac6-4c7d-8aa5-bbdb2c9b7b4e",
        "title": "The Doors of Perception",
        "isbnCode": "978677056981237",
        "author": "Randell Kovacek",
        "genre": "friction",
        "yearOfPublication": "1997",
        "price": 2102.52,
        "stock": 11
    },
    {
        "id": "d2133ff0-8a4b-4a91-afc0-26dd4ac7575d",
        "title": "Françoise Sagan",
        "isbnCode": "978551805032477",
        "author": "Madonna Weber I",
        "genre": "horror",
        "yearOfPublication": "1981",
        "price": 2641.26,
        "stock": 18
    },
    {
        "id": "f1ad74ca-202a-4464-b837-d6f1406d5f70",
        "title": "Things Fall Apart",
        "isbnCode": "978697198265251",
        "author": "Shae Weimann MD",
        "genre": "friction",
        "yearOfPublication": "1942",
        "price": 4371.29,
        "stock": 13
    },
    {
        "id": "3fa59d80-607d-4453-845d-ec48ededd80d",
        "title": "Look to Windward",
        "isbnCode": "978682775664541",
        "author": "Bruno Homenick",
        "genre": "poetry",
        "yearOfPublication": "2009",
        "price": 3531.34,
        "stock": 4
    },
    {
        "id": "807bc080-6104-4c8f-8db6-e325da0a4d78",
        "title": "The Way Through the Woods",
        "isbnCode": "978869178596533",
        "author": "Akiko Mitchell",
        "genre": "horror",
        "yearOfPublication": "2009",
        "price": 3579.05,
        "stock": 15
    },
    {
        "id": "8de98c4d-8be3-4c1a-a24d-6ace4a8ffddd",
        "title": "The Torment of Others",
        "isbnCode": "978014226742584",
        "author": "Evita Cronin",
        "genre": "mystery",
        "yearOfPublication": "1941",
        "price": 4179.04,
        "stock": 17
    },
    {
        "id": "41157625-d881-40b7-be9f-32c7453252bd",
        "title": "Rosemary Sutcliff",
        "isbnCode": "978971493897307",
        "author": "Nydia Considine",
        "genre": "thriller",
        "yearOfPublication": "1976",
        "price": 2425.97,
        "stock": 5
    },
    {
        "id": "776a0778-0f19-48b2-a810-8dde88649043",
        "title": "No Longer at Ease",
        "isbnCode": "978348796226989",
        "author": "Elfreda Jast IV",
        "genre": "friction",
        "yearOfPublication": "1946",
        "price": 2467.63,
        "stock": 13
    },
    {
        "id": "0e004f8d-00df-4045-89c8-3f190339761b",
        "title": "Gone with the Wind",
        "isbnCode": "978918059714072",
        "author": "Cedric Howell I",
        "genre": "thriller",
        "yearOfPublication": "1950",
        "price": 2926.75,
        "stock": 9
    },
    {
        "id": "dba12811-848e-4d1a-9111-9560dc04ae2f",
        "title": "Clouds of Witness",
        "isbnCode": "978060171834774",
        "author": "Alden Sporer",
        "genre": "horror",
        "yearOfPublication": "1961",
        "price": 3194.78,
        "stock": 7
    },
    {
        "id": "baf9821e-9cb9-406c-addd-61f74b4261cf",
        "title": "Vile Bodies",
        "isbnCode": "978221383798627",
        "author": "Ronnie Terry",
        "genre": "horror",
        "yearOfPublication": "2023",
        "price": 4847.14,
        "stock": 3
    },
    {
        "id": "bf976784-b03d-49ba-bcdc-85e1ac8c3dc1",
        "title": "Lilies of the Field",
        "isbnCode": "978907681950611",
        "author": "Kristofer Collier",
        "genre": "poetry",
        "yearOfPublication": "1983",
        "price": 3394.23,
        "stock": 13
    },
    {
        "id": "90162c8f-92dc-4aab-9a3e-c41b5431ad3d",
        "title": "Bury My Heart at Wounded Knee",
        "isbnCode": "978763504334803",
        "author": "Enoch Macejkovic",
        "genre": "mystery",
        "yearOfPublication": "1969",
        "price": 2116.73,
        "stock": 2
    },
    {
        "id": "1f762977-da13-4d84-af1d-86b894ad92d5",
        "title": "Time To Murder And Create",
        "isbnCode": "978306147222201",
        "author": "Charles Reynolds V",
        "genre": "poetry",
        "yearOfPublication": "2002",
        "price": 3018.06,
        "stock": 12
    },
    {
        "id": "fc9cb371-6dcf-4304-b487-111e3a89aa2f",
        "title": "Consider Phlebas",
        "isbnCode": "978903738436779",
        "author": "Miss Katharine Kris",
        "genre": "mystery",
        "yearOfPublication": "2002",
        "price": 3695.51,
        "stock": 4
    },
    {
        "id": "6dd8b5de-0487-4fb1-895a-7853120b3f91",
        "title": "A Handful of Dust",
        "isbnCode": "978619096924042",
        "author": "Waltraud Dibbert DDS",
        "genre": "horror",
        "yearOfPublication": "1999",
        "price": 4993.61,
        "stock": 19
    },
    {
        "id": "17d42392-5ab9-4ebe-8fa8-831b1ef48b09",
        "title": "Mother Night",
        "isbnCode": "978643762400172",
        "author": "Virgie Barrows I",
        "genre": "horror",
        "yearOfPublication": "2011",
        "price": 4766.70,
        "stock": 3
    },
    {
        "id": "a8c9fb8f-1781-44b4-82fc-ef59073c3ec9",
        "title": "Some Buried Caesar",
        "isbnCode": "978447492634199",
        "author": "Joaquina Homenick",
        "genre": "poetry",
        "yearOfPublication": "1978",
        "price": 2838.14,
        "stock": 7
    },
    {
        "id": "863708a1-2c82-4028-a4cf-626ca946d0f9",
        "title": "O Pioneers!",
        "isbnCode": "978159498437202",
        "author": "Maynard Brakus",
        "genre": "mystery",
        "yearOfPublication": "1959",
        "price": 2935.02,
        "stock": 0
    },
    {
        "id": "0e6e8e02-773b-4ccd-9dca-579e51551d09",
        "title": "Clouds of Witness",
        "isbnCode": "978484532321740",
        "author": "Brady Spencer",
        "genre": "friction",
        "yearOfPublication": "1982",
        "price": 4272.55,
        "stock": 15
    },
    {
        "id": "2cb21f0f-fd47-490a-ac81-720d95cdb593",
        "title": "Jacob Have I Loved",
        "isbnCode": "978029540910408",
        "author": "Manuel Gislason",
        "genre": "horror",
        "yearOfPublication": "1960",
        "price": 4913.54,
        "stock": 14
    },
    {
        "id": "1fff2bb6-967c-44cc-b56f-ede640a24d48",
        "title": "Ring of Bright Water",
        "isbnCode": "978265785138809",
        "author": "Jordon Ruecker Jr.",
        "genre": "poetry",
        "yearOfPublication": "1984",
        "price": 2672.63,
        "stock": 14
    },
    {
        "id": "bc6f73be-f607-425f-9c47-e4948d2e497d",
        "title": "O Jerusalem!",
        "isbnCode": "978590463690056",
        "author": "Moses Wuckert",
        "genre": "horror",
        "yearOfPublication": "1994",
        "price": 2881.72,
        "stock": 3
    },
    {
        "id": "0d44e5af-0572-46b9-a16f-60323833acb8",
        "title": "The Road Less Traveled",
        "isbnCode": "978902222153262",
        "author": "Lacy Waters",
        "genre": "poetry",
        "yearOfPublication": "1994",
        "price": 2860.55,
        "stock": 18
    },
    {
        "id": "f9f27675-1060-4dd6-9fc6-18d07326e451",
        "title": "For Whom the Bell Tolls",
        "isbnCode": "978216385865550",
        "author": "Jeromy Kshlerin",
        "genre": "friction",
        "yearOfPublication": "2010",
        "price": 3314.48,
        "stock": 12
    },
    {
        "id": "2c9d5360-631b-4597-8563-40e57e2d3345",
        "title": "The Sun Also Rises",
        "isbnCode": "978487067727412",
        "author": "Kris Mayert",
        "genre": "poetry",
        "yearOfPublication": "2022",
        "price": 2973.94,
        "stock": 16
    },
    {
        "id": "6acd0b8f-92f3-4a53-9eaf-5af6a8b901ff",
        "title": "The Lathe of Heaven",
        "isbnCode": "978481417931572",
        "author": "Gus Hauck",
        "genre": "poetry",
        "yearOfPublication": "1948",
        "price": 3164.73,
        "stock": 7
    },
    {
        "id": "514a56c5-824a-4343-8350-79d46cc0609a",
        "title": "To Your Scattered Bodies Go",
        "isbnCode": "978282075240596",
        "author": "Mr. Shanna Cartwright",
        "genre": "thriller",
        "yearOfPublication": "1938",
        "price": 3048.11,
        "stock": 1
    },
    {
        "id": "577f056b-1f4f-4cc0-9b07-8415ee7438aa",
        "title": "A Passage to India",
        "isbnCode": "978970438371698",
        "author": "Sharyl Fadel",
        "genre": "mystery",
        "yearOfPublication": "2020",
        "price": 2215.91,
        "stock": 6
    },
    {
        "id": "a635d479-8cf0-4770-ae3d-e5ead6188780",
        "title": "The Moon by Night",
        "isbnCode": "978529687421224",
        "author": "Martina Hyatt",
        "genre": "friction",
        "yearOfPublication": "2001",
        "price": 3245.25,
        "stock": 19
    },
    {
        "id": "b3598c12-a8c3-4ec5-a1c5-88fe7b0b5504",
        "title": "Endless Night",
        "isbnCode": "978366766981820",
        "author": "Colton Hoeger",
        "genre": "horror",
        "yearOfPublication": "1977",
        "price": 2626.26,
        "stock": 0
    },
    {
        "id": "ea86f168-e95b-4e5e-8a19-cede3115c3a5",
        "title": "Paths of Glory",
        "isbnCode": "978304146366159",
        "author": "Benjamin Kuphal",
        "genre": "friction",
        "yearOfPublication": "1967",
        "price": 3672.00,
        "stock": 7
    },
    {
        "id": "ad68e412-94ce-44c1-8bfd-553b615e8281",
        "title": "Moab Is My Washpot",
        "isbnCode": "978766263993409",
        "author": "Vickey Ernser",
        "genre": "friction",
        "yearOfPublication": "1926",
        "price": 3769.42,
        "stock": 11
    },
    {
        "id": "b6f01658-6cae-4f72-978b-e879538446eb",
        "title": "Far From the Madding Crowd",
        "isbnCode": "978633652653737",
        "author": "Joe Herzog PhD",
        "genre": "poetry",
        "yearOfPublication": "1955",
        "price": 4401.86,
        "stock": 11
    },
    {
        "id": "731259f0-09a0-47d2-94e7-8bbae127b453",
        "title": "I Know Why the Caged Bird Sings",
        "isbnCode": "978364542691946",
        "author": "Louie Rempel",
        "genre": "horror",
        "yearOfPublication": "1986",
        "price": 2446.74,
        "stock": 12
    },
    {
        "id": "0a93c5a5-b239-49a5-b552-ca6a1a16e01b",
        "title": "To Sail Beyond the Sunset",
        "isbnCode": "978488558688640",
        "author": "Mignon Gusikowski",
        "genre": "poetry",
        "yearOfPublication": "2001",
        "price": 2314.83,
        "stock": 17
    },
    {
        "id": "5d51f6ec-d16a-4fb2-b756-2a6506168dad",
        "title": "Look Homeward, Angel",
        "isbnCode": "978981390827397",
        "author": "Joey Skiles",
        "genre": "friction",
        "yearOfPublication": "1949",
        "price": 3087.27,
        "stock": 11
    },
    {
        "id": "f0831117-f4c0-42f5-8fa9-77b8b21a37cc",
        "title": "Shall not Perish",
        "isbnCode": "978488529317927",
        "author": "Celsa Conroy",
        "genre": "poetry",
        "yearOfPublication": "1958",
        "price": 3993.88,
        "stock": 8
    },
    {
        "id": "6465831c-a815-4939-a1f8-c5219172b620",
        "title": "I Know Why the Caged Bird Sings",
        "isbnCode": "978836999314390",
        "author": "Earnest Schmeler I",
        "genre": "friction",
        "yearOfPublication": "1948",
        "price": 2525.84,
        "stock": 2
    },
    {
        "id": "0600075d-62bf-40d6-992f-7c35c8f8c302",
        "title": "The Road Less Traveled",
        "isbnCode": "978812292656059",
        "author": "Rosette Ratke",
        "genre": "poetry",
        "yearOfPublication": "1955",
        "price": 2044.40,
        "stock": 4
    },
    {
        "id": "c2773f7c-674f-45ae-ace0-d63a468ab955",
        "title": "The Needle's Eye",
        "isbnCode": "978868559626591",
        "author": "Lyman Quigley DDS",
        "genre": "friction",
        "yearOfPublication": "2004",
        "price": 3849.89,
        "stock": 1
    },
    {
        "id": "4e767c7b-78e1-4ce1-870b-ceae23d17f59",
        "title": "The Way Through the Woods",
        "isbnCode": "978929240996528",
        "author": "Ms. Kyle Lang",
        "genre": "horror",
        "yearOfPublication": "1968",
        "price": 3078.62,
        "stock": 7
    },
    {
        "id": "8d311405-10d8-46cd-8e87-b38aaa5c97da",
        "title": "To Sail Beyond the Sunset",
        "isbnCode": "978791648417119",
        "author": "Brooke Littel",
        "genre": "horror",
        "yearOfPublication": "1989",
        "price": 3236.34,
        "stock": 11
    },
    {
        "id": "84ffe610-8390-4995-b487-2792aeaab474",
        "title": "The Mirror Crack'd from Side to Side",
        "isbnCode": "978367155038348",
        "author": "Dr. Charles Gislason",
        "genre": "horror",
        "yearOfPublication": "1936",
        "price": 4357.28,
        "stock": 9
    },
    {
        "id": "23cca9b2-2392-4046-91fd-32c95d67fc63",
        "title": "Behold the Man",
        "isbnCode": "978963910976326",
        "author": "Christal West",
        "genre": "mystery",
        "yearOfPublication": "1946",
        "price": 4604.80,
        "stock": 11
    },
    {
        "id": "cff73c54-c139-403c-8831-e352d97e9e89",
        "title": "No Country for Old Men",
        "isbnCode": "978668987264300",
        "author": "Tristan Crona",
        "genre": "horror",
        "yearOfPublication": "1958",
        "price": 2127.45,
        "stock": 4
    },
    {
        "id": "d84e2acb-6c2e-41dc-9d3c-f3d8620c22a6",
        "title": "O Jerusalem!",
        "isbnCode": "978740349831183",
        "author": "Ms. Jerry Ortiz",
        "genre": "poetry",
        "yearOfPublication": "2022",
        "price": 4815.44,
        "stock": 18
    },
    {
        "id": "efb0858c-f357-430f-9dcd-f6cedbf30101",
        "title": "In Death Ground",
        "isbnCode": "978612040343693",
        "author": "Mr. Opal Emard",
        "genre": "poetry",
        "yearOfPublication": "1991",
        "price": 4913.02,
        "stock": 12
    },
    {
        "id": "eff6b561-36fd-4963-8bda-cbf8e86d06d8",
        "title": "Absalom, Absalom!",
        "isbnCode": "978049150304434",
        "author": "Carli Turner",
        "genre": "poetry",
        "yearOfPublication": "1924",
        "price": 3197.82,
        "stock": 11
    },
    {
        "id": "280f282a-6825-4531-b91f-316b06ebe6dd",
        "title": "Vanity Fair",
        "isbnCode": "978753720128175",
        "author": "My Robel",
        "genre": "thriller",
        "yearOfPublication": "1963",
        "price": 2006.65,
        "stock": 9
    },
    {
        "id": "8c2b1e75-c1c4-445c-a3a1-1465f9b05354",
        "title": "To Say Nothing of the Dog",
        "isbnCode": "978461842469944",
        "author": "Wendell Konopelski",
        "genre": "mystery",
        "yearOfPublication": "2004",
        "price": 4482.76,
        "stock": 1
    },
    {
        "id": "a29f7b09-7821-4bc2-bb97-8d9842b62cad",
        "title": "All the King's Men",
        "isbnCode": "978851313666339",
        "author": "Myles Quigley",
        "genre": "friction",
        "yearOfPublication": "2009",
        "price": 4449.26,
        "stock": 3
    },
    {
        "id": "e4dd5a30-0df7-4e33-bc8c-08fc7cb90fb6",
        "title": "Ego Dominus Tuus",
        "isbnCode": "978122505691161",
        "author": "Gaston Fisher DVM",
        "genre": "friction",
        "yearOfPublication": "1987",
        "price": 3570.52,
        "stock": 8
    },
    {
        "id": "a8452961-5647-428d-a91a-051ba4f8c8d1",
        "title": "The Last Temptation",
        "isbnCode": "978428856768874",
        "author": "Roselyn Davis",
        "genre": "poetry",
        "yearOfPublication": "1955",
        "price": 2862.85,
        "stock": 14
    },
    {
        "id": "4e2231a0-e995-49c8-aae7-f6db20c25ffe",
        "title": "The Heart Is Deceitful Above All Things",
        "isbnCode": "978378891914786",
        "author": "Bud Dietrich",
        "genre": "poetry",
        "yearOfPublication": "1956",
        "price": 2731.50,
        "stock": 12
    },
    {
        "id": "5db4028d-31b1-4083-9371-d9dd5bf3e6b2",
        "title": "Pale Kings and Princes",
        "isbnCode": "978262215688254",
        "author": "Belva Bechtelar",
        "genre": "horror",
        "yearOfPublication": "1930",
        "price": 3883.63,
        "stock": 1
    },
    {
        "id": "808e8c2c-a64a-482c-b3fe-667de091606b",
        "title": "Of Human Bondage",
        "isbnCode": "978939276365826",
        "author": "Miles Maggio IV",
        "genre": "horror",
        "yearOfPublication": "2002",
        "price": 4293.55,
        "stock": 19
    },
    {
        "id": "f42ad678-ebd2-49b4-a5ea-1d23c6440be9",
        "title": "The Daffodil Sky",
        "isbnCode": "978815176985544",
        "author": "Tennille Murphy",
        "genre": "poetry",
        "yearOfPublication": "1977",
        "price": 3068.98,
        "stock": 2
    },
    {
        "id": "b7dc825c-8253-40ce-bc55-2bcf432dd5e3",
        "title": "The Needle's Eye",
        "isbnCode": "978459649810986",
        "author": "Newton Sanford",
        "genre": "horror",
        "yearOfPublication": "1993",
        "price": 4212.84,
        "stock": 16
    },
    {
        "id": "1aee0c82-1b88-41fd-8b11-a974b46a7099",
        "title": "A Summer Bird-Cage",
        "isbnCode": "978201979216099",
        "author": "Lacy Hand Jr.",
        "genre": "horror",
        "yearOfPublication": "1990",
        "price": 4406.11,
        "stock": 5
    },
    {
        "id": "66e3c90a-a77b-4ae5-a4fc-3a5f1075cb7a",
        "title": "Consider the Lilies",
        "isbnCode": "978655687602343",
        "author": "Dr. Everette McClure",
        "genre": "thriller",
        "yearOfPublication": "2006",
        "price": 3924.70,
        "stock": 7
    },
    {
        "id": "dfeec113-1d78-44c5-a736-755ed65e6db4",
        "title": "The Little Foxes",
        "isbnCode": "978898866802343",
        "author": "Deane Conn Sr.",
        "genre": "friction",
        "yearOfPublication": "2002",
        "price": 2618.51,
        "stock": 13
    },
    {
        "id": "28bcd2f5-02e6-4ec5-b585-ef60658fa31f",
        "title": "The Moving Toyshop",
        "isbnCode": "978907606743108",
        "author": "Nick Considine I",
        "genre": "poetry",
        "yearOfPublication": "1996",
        "price": 3890.79,
        "stock": 6
    },
    {
        "id": "26b93eb3-e4e5-4d53-af87-93990c69521e",
        "title": "Endless Night",
        "isbnCode": "978328903724400",
        "author": "Mrs. Damian Breitenberg",
        "genre": "thriller",
        "yearOfPublication": "1963",
        "price": 2769.13,
        "stock": 5
    },
    {
        "id": "6f005598-3c44-413a-be38-b8d50070294d",
        "title": "I Know Why the Caged Bird Sings",
        "isbnCode": "978173915300587",
        "author": "Valentin Johns",
        "genre": "horror",
        "yearOfPublication": "1963",
        "price": 4807.84,
        "stock": 4
    },
    {
        "id": "3f4f3f9f-7352-41c5-bf54-1f77b10ab66f",
        "title": "The Way Through the Woods",
        "isbnCode": "978423445872971",
        "author": "Theola Quitzon",
        "genre": "poetry",
        "yearOfPublication": "1975",
        "price": 2189.50,
        "stock": 4
    },
    {
        "id": "e8c4b2a9-3791-49c7-8d88-8af295257f66",
        "title": "Many Waters",
        "isbnCode": "978736935826453",
        "author": "Charlyn Gerhold",
        "genre": "poetry",
        "yearOfPublication": "1952",
        "price": 3859.38,
        "stock": 5
    },
    {
        "id": "46f0bfa2-a101-4a35-aedb-807d74f95f36",
        "title": "Cabbages and Kings",
        "isbnCode": "978220648922943",
        "author": "Dominique Marquardt",
        "genre": "horror",
        "yearOfPublication": "1928",
        "price": 4139.26,
        "stock": 8
    },
    {
        "id": "391c3ca0-7156-4412-a0e1-ea12ed0a33b8",
        "title": "Number the Stars",
        "isbnCode": "978386063700505",
        "author": "Anthony Dooley",
        "genre": "thriller",
        "yearOfPublication": "1948",
        "price": 2609.88,
        "stock": 7
    },
    {
        "id": "48b5a3b5-e171-4e19-b489-95c8dcca1fe6",
        "title": "A Time of Gifts",
        "isbnCode": "978865603378228",
        "author": "Natalie Reichert DDS",
        "genre": "mystery",
        "yearOfPublication": "1939",
        "price": 3380.45,
        "stock": 2
    },
    {
        "id": "9aca73ca-ed8d-41ea-9a09-2965a494a846",
        "title": "Dying of the Light",
        "isbnCode": "978534990960853",
        "author": "Raleigh Dach",
        "genre": "mystery",
        "yearOfPublication": "1997",
        "price": 4973.32,
        "stock": 18
    },
    {
        "id": "28a63375-fda2-42f4-a7a5-384c4bf2e22f",
        "title": "The House of Mirth",
        "isbnCode": "978623859652712",
        "author": "Jonathon Stracke",
        "genre": "mystery",
        "yearOfPublication": "1972",
        "price": 4638.20,
        "stock": 12
    },
    {
        "id": "047b33e2-3972-4011-80af-a2a175216bb1",
        "title": "Gone with the Wind",
        "isbnCode": "978719252046752",
        "author": "Stephanie Schimmel",
        "genre": "mystery",
        "yearOfPublication": "1979",
        "price": 4367.64,
        "stock": 11
    },
    {
        "id": "8c4bf193-5835-48c5-9573-da4f0f39f662",
        "title": "Recalled to Life",
        "isbnCode": "978441220459171",
        "author": "Alexis Gulgowski MD",
        "genre": "poetry",
        "yearOfPublication": "2006",
        "price": 4160.87,
        "stock": 12
    },
    {
        "id": "0787cb25-24e4-4c73-b139-50a4352b600c",
        "title": "A Catskill Eagle",
        "isbnCode": "978913259161607",
        "author": "Tomas Heaney",
        "genre": "poetry",
        "yearOfPublication": "2019",
        "price": 3989.74,
        "stock": 13
    },
    {
        "id": "b3cbdede-8bb8-476d-b30d-5853f8b4155f",
        "title": "Where Angels Fear to Tread",
        "isbnCode": "978695515692134",
        "author": "Ms. Despina Walker",
        "genre": "thriller",
        "yearOfPublication": "1993",
        "price": 4423.28,
        "stock": 4
    },
    {
        "id": "2c16e800-7f0b-4f19-9996-aff489f93cda",
        "title": "The Last Enemy",
        "isbnCode": "978382337584725",
        "author": "Jae McKenzie",
        "genre": "friction",
        "yearOfPublication": "1942",
        "price": 2744.92,
        "stock": 17
    },
    {
        "id": "fbbbf4a7-f830-4a40-9efa-fcff5533b142",
        "title": "The Needle's Eye",
        "isbnCode": "978438324502989",
        "author": "Leonila Legros",
        "genre": "friction",
        "yearOfPublication": "1998",
        "price": 2367.30,
        "stock": 5
    },
    {
        "id": "8c15a49d-d90b-4ca7-9cc3-54ad6fa4044d",
        "title": "That Good Night",
        "isbnCode": "978020642541438",
        "author": "Michel Weimann",
        "genre": "friction",
        "yearOfPublication": "1951",
        "price": 4049.66,
        "stock": 1
    },
    {
        "id": "53252f75-0044-4964-8a3d-870d520a3adc",
        "title": "Dance Dance Dance",
        "isbnCode": "978009908581912",
        "author": "Milagro Roob",
        "genre": "mystery",
        "yearOfPublication": "1972",
        "price": 3263.00,
        "stock": 12
    },
    {
        "id": "7c72f767-35c8-42fb-aeff-fc096a6cb1e2",
        "title": "Gone with the Wind",
        "isbnCode": "978674681676421",
        "author": "Guillermo Rowe",
        "genre": "poetry",
        "yearOfPublication": "1978",
        "price": 4019.43,
        "stock": 18
    },
    {
        "id": "6fa5add3-f62f-4f17-82ec-0f99ea863cac",
        "title": "East of Eden",
        "isbnCode": "978177254433276",
        "author": "Vaughn Bechtelar",
        "genre": "thriller",
        "yearOfPublication": "1948",
        "price": 2807.04,
        "stock": 16
    },
    {
        "id": "a6091cc4-d8a9-4a54-a2c7-479d6dd1bac0",
        "title": "The Parliament of Man",
        "isbnCode": "978808413624842",
        "author": "Robby Schaden",
        "genre": "friction",
        "yearOfPublication": "1940",
        "price": 3741.38,
        "stock": 18
    },
    {
        "id": "c5ae0af1-db73-4977-bdac-19783c9fd57f",
        "title": "Antic Hay",
        "isbnCode": "978459864313489",
        "author": "Mitzi Toy",
        "genre": "horror",
        "yearOfPublication": "1991",
        "price": 3397.98,
        "stock": 2
    },
    {
        "id": "b0554630-3ad6-464d-b3d2-083f0a60b1d0",
        "title": "Postern of Fate",
        "isbnCode": "978396163009107",
        "author": "Mr. Caren Beer",
        "genre": "friction",
        "yearOfPublication": "1998",
        "price": 3606.48,
        "stock": 18
    },
    {
        "id": "ea26c1a0-7c34-4b54-939a-992a0bb57bb6",
        "title": "Absalom, Absalom!",
        "isbnCode": "978601972639111",
        "author": "Joel Witting Sr.",
        "genre": "horror",
        "yearOfPublication": "1958",
        "price": 4215.23,
        "stock": 3
    },
    {
        "id": "6ad85269-7df4-4054-ae92-0f31bc39dd7e",
        "title": "Down to a Sunless Sea",
        "isbnCode": "978130815633270",
        "author": "Dr. Madaline Russel",
        "genre": "thriller",
        "yearOfPublication": "2005",
        "price": 3721.78,
        "stock": 8
    },
    {
        "id": "ac891257-f278-480b-87f4-752f3cdcae00",
        "title": "A Catskill Eagle",
        "isbnCode": "978400381253762",
        "author": "Carmelo O'Connell",
        "genre": "mystery",
        "yearOfPublication": "1969",
        "price": 4423.76,
        "stock": 13
    },
    {
        "id": "8505e264-0a4c-41c5-9b59-265b28dc0aff",
        "title": "If I Forget Thee Jerusalem",
        "isbnCode": "978986010173307",
        "author": "Latoria Goodwin",
        "genre": "thriller",
        "yearOfPublication": "1993",
        "price": 4664.44,
        "stock": 5
    },
    {
        "id": "9393bb7c-ec51-40e2-857c-a8608fd8465d",
        "title": "A Swiftly Tilting Planet",
        "isbnCode": "978542958728508",
        "author": "Lasonya Heidenreich",
        "genre": "poetry",
        "yearOfPublication": "1977",
        "price": 4810.14,
        "stock": 18
    },
    {
        "id": "58d461a6-d2ef-4365-934d-3d6a7623395d",
        "title": "The Heart Is a Lonely Hunter",
        "isbnCode": "978271309595245",
        "author": "Yong Frami",
        "genre": "friction",
        "yearOfPublication": "2012",
        "price": 3376.77,
        "stock": 8
    },
    {
        "id": "ef595a2b-471c-45b0-849f-1f973071c45c",
        "title": "From Here to Eternity",
        "isbnCode": "978630107889694",
        "author": "Lily Cartwright",
        "genre": "mystery",
        "yearOfPublication": "1973",
        "price": 2209.33,
        "stock": 1
    },
    {
        "id": "1658a235-06f0-4bef-9ee3-8293c41e5968",
        "title": "The Mirror Crack'd from Side to Side",
        "isbnCode": "978544510901703",
        "author": "Ms. Leonardo Romaguera",
        "genre": "friction",
        "yearOfPublication": "1941",
        "price": 4521.79,
        "stock": 6
    },
    {
        "id": "5036a1e8-caba-455b-9c92-d55aed11fb76",
        "title": "In Death Ground",
        "isbnCode": "978643811660455",
        "author": "Don Fahey",
        "genre": "horror",
        "yearOfPublication": "1997",
        "price": 4018.57,
        "stock": 13
    },
    {
        "id": "957e966a-f86e-4acd-baca-bed5d712882a",
        "title": "Some Buried Caesar",
        "isbnCode": "978849076830143",
        "author": "Erwin Runte",
        "genre": "horror",
        "yearOfPublication": "1939",
        "price": 2278.20,
        "stock": 3
    },
    {
        "id": "a34df7ef-170f-4291-9def-75bbbc8dea30",
        "title": "Wildfire at Midnight",
        "isbnCode": "978470030779709",
        "author": "Maricela Wintheiser PhD",
        "genre": "horror",
        "yearOfPublication": "2006",
        "price": 2721.96,
        "stock": 8
    },
    {
        "id": "3ac44558-9e57-42c6-9c79-23817bb2c540",
        "title": "Now Sleeps the Crimson Petal",
        "isbnCode": "978470905776813",
        "author": "Ty Wunsch",
        "genre": "poetry",
        "yearOfPublication": "2000",
        "price": 2140.54,
        "stock": 13
    },
    {
        "id": "5c0df266-e96b-47ee-a7c1-90eb7ae899fa",
        "title": "The Wives of Bath",
        "isbnCode": "978376161675188",
        "author": "Bernardina Turner",
        "genre": "poetry",
        "yearOfPublication": "2002",
        "price": 3736.07,
        "stock": 3
    },
    {
        "id": "9423dc61-32b3-452d-a3da-a7ef38a89224",
        "title": "Sleep the Brave",
        "isbnCode": "978082386776329",
        "author": "Terrance DuBuque IV",
        "genre": "friction",
        "yearOfPublication": "1959",
        "price": 2295.48,
        "stock": 19
    },
    {
        "id": "90559a5a-7324-4521-b909-fd79636986f2",
        "title": "Where Angels Fear to Tread",
        "isbnCode": "978844913171274",
        "author": "Merilyn Lueilwitz V",
        "genre": "horror",
        "yearOfPublication": "1936",
        "price": 3250.76,
        "stock": 6
    },
    {
        "id": "cd478513-8f18-40d3-b13c-041fcb7adf2d",
        "title": "I Will Fear No Evil",
        "isbnCode": "978451602270271",
        "author": "Rose Rutherford DDS",
        "genre": "mystery",
        "yearOfPublication": "1972",
        "price": 3703.55,
        "stock": 6
    },
    {
        "id": "a5792792-40f0-4325-8532-4d90b9d6d1e2",
        "title": "Fair Stood the Wind for France",
        "isbnCode": "978311486419055",
        "author": "Florance Balistreri",
        "genre": "mystery",
        "yearOfPublication": "1978",
        "price": 3522.16,
        "stock": 15
    },
    {
        "id": "ecdadbd2-5fd7-4246-8272-9200be6e8496",
        "title": "Blood's a Rover",
        "isbnCode": "978027742905526",
        "author": "Amie Waelchi MD",
        "genre": "horror",
        "yearOfPublication": "2022",
        "price": 3794.53,
        "stock": 14
    },
    {
        "id": "a05065ae-b5a5-4cc9-a1d8-cac28eca7c3c",
        "title": "Blood's a Rover",
        "isbnCode": "978586953921792",
        "author": "Meghan Blick",
        "genre": "horror",
        "yearOfPublication": "1934",
        "price": 3774.19,
        "stock": 0
    },
    {
        "id": "7b9c7588-f376-4ee6-808f-ca4437dbf984",
        "title": "Some Buried Caesar",
        "isbnCode": "978445076429153",
        "author": "Rudolf Heidenreich",
        "genre": "thriller",
        "yearOfPublication": "1951",
        "price": 3982.29,
        "stock": 0
    },
    {
        "id": "feef6582-148b-425f-8da7-585bfdba6756",
        "title": "Gone with the Wind",
        "isbnCode": "978845034628462",
        "author": "Mr. Rodolfo Trantow",
        "genre": "poetry",
        "yearOfPublication": "1980",
        "price": 3367.98,
        "stock": 17
    },
    {
        "id": "de974163-4726-4138-9c14-51af668deb13",
        "title": "Tirra Lirra by the River",
        "isbnCode": "978943107557573",
        "author": "Lois Mertz MD",
        "genre": "poetry",
        "yearOfPublication": "1983",
        "price": 4809.61,
        "stock": 1
    },
    {
        "id": "09496bef-4db0-4385-b370-ee9462fc9ab5",
        "title": "The Needle's Eye",
        "isbnCode": "978430116218256",
        "author": "Mr. Alphonso Kunde",
        "genre": "poetry",
        "yearOfPublication": "2011",
        "price": 2170.52,
        "stock": 15
    },
    {
        "id": "492428fc-68e5-424a-8f47-3da46e80f523",
        "title": "Dying of the Light",
        "isbnCode": "978001600409284",
        "author": "Mrs. Michel Russel",
        "genre": "friction",
        "yearOfPublication": "1962",
        "price": 4803.51,
        "stock": 11
    },
    {
        "id": "75149f0e-a3b2-4732-bbb1-6fb98c3cb50d",
        "title": "Cover Her Face",
        "isbnCode": "978782645658487",
        "author": "Myron Labadie",
        "genre": "mystery",
        "yearOfPublication": "2014",
        "price": 3329.34,
        "stock": 6
    },
    {
        "id": "8e07ce17-82b8-46e5-8923-23a6b0bcb34c",
        "title": "A Confederacy of Dunces",
        "isbnCode": "978418322377827",
        "author": "Mrs. Drew Bernhard",
        "genre": "friction",
        "yearOfPublication": "1953",
        "price": 4670.39,
        "stock": 5
    },
    {
        "id": "17cbb3ab-3527-4eed-b116-a6115750d16f",
        "title": "Eyeless in Gaza",
        "isbnCode": "978805448063514",
        "author": "Marian Jacobson",
        "genre": "mystery",
        "yearOfPublication": "1926",
        "price": 2215.41,
        "stock": 7
    },
    {
        "id": "ed250571-3352-4719-aa42-aad5ec61ef64",
        "title": "What's Become of Waring",
        "isbnCode": "978356550373305",
        "author": "Beryl Witting",
        "genre": "mystery",
        "yearOfPublication": "1962",
        "price": 2286.15,
        "stock": 12
    },
    {
        "id": "f4d34f25-e9ec-45f7-9602-5c4643e6f4c1",
        "title": "A Confederacy of Dunces",
        "isbnCode": "978753315772532",
        "author": "Miss Kurt Hane",
        "genre": "horror",
        "yearOfPublication": "1994",
        "price": 2789.41,
        "stock": 4
    },
    {
        "id": "1695436c-2600-4e6b-9c34-981fe9a8bc18",
        "title": "A Summer Bird-Cage",
        "isbnCode": "978055635087203",
        "author": "Chang Collier",
        "genre": "friction",
        "yearOfPublication": "1928",
        "price": 4709.17,
        "stock": 18
    },
    {
        "id": "ef74772f-2ab7-4a07-bbf5-1e362151236f",
        "title": "Waiting for the Barbarians",
        "isbnCode": "978843792092694",
        "author": "Conchita Bins",
        "genre": "poetry",
        "yearOfPublication": "2014",
        "price": 3764.50,
        "stock": 6
    },
    {
        "id": "590aa77d-c32a-4b71-8624-e6667009c923",
        "title": "The Sun Also Rises",
        "isbnCode": "978432748994216",
        "author": "Rob Mann",
        "genre": "friction",
        "yearOfPublication": "1941",
        "price": 4550.56,
        "stock": 15
    },
    {
        "id": "14f41b17-f266-4f76-b7ef-a5ecc68217d3",
        "title": "The Heart Is a Lonely Hunter",
        "isbnCode": "978632338395482",
        "author": "Arturo Connelly Sr.",
        "genre": "mystery",
        "yearOfPublication": "1991",
        "price": 2954.76,
        "stock": 14
    },
    {
        "id": "e2d73e19-b73a-452f-9f53-aa74fbf2826b",
        "title": "No Country for Old Men",
        "isbnCode": "978646989660846",
        "author": "Dusti Mills",
        "genre": "thriller",
        "yearOfPublication": "1952",
        "price": 2263.01,
        "stock": 9
    },
    {
        "id": "8d8255d9-7a4b-44b3-8826-256da4ccd2cf",
        "title": "Cabbages and Kings",
        "isbnCode": "978400969345526",
        "author": "Cliff Ruecker",
        "genre": "thriller",
        "yearOfPublication": "2003",
        "price": 4593.30,
        "stock": 1
    },
    {
        "id": "cc52cc00-f58a-47ca-b494-1024ceccb62e",
        "title": "The Doors of Perception",
        "isbnCode": "978976712722039",
        "author": "Reatha Ratke",
        "genre": "mystery",
        "yearOfPublication": "2019",
        "price": 4073.77,
        "stock": 0
    },
    {
        "id": "5dd93fc3-10ca-49a5-8845-b56dad3fb043",
        "title": "No Longer at Ease",
        "isbnCode": "978720461160527",
        "author": "Tomas Nikolaus",
        "genre": "poetry",
        "yearOfPublication": "1954",
        "price": 3774.10,
        "stock": 12
    },
    {
        "id": "7d4e83ae-ab55-47f7-a514-2b9cd1ef8a44",
        "title": "The Last Enemy",
        "isbnCode": "978360231631691",
        "author": "Keesha Koelpin MD",
        "genre": "friction",
        "yearOfPublication": "1943",
        "price": 2949.19,
        "stock": 9
    },
    {
        "id": "7608e4d6-0c53-4c22-931a-e22274365dde",
        "title": "A Handful of Dust",
        "isbnCode": "978426257481673",
        "author": "Bryan Herman IV",
        "genre": "mystery",
        "yearOfPublication": "1984",
        "price": 4302.60,
        "stock": 11
    },
    {
        "id": "3f532c32-de24-4c86-be87-ea60d84698be",
        "title": "Nectar in a Sieve",
        "isbnCode": "978894680248723",
        "author": "Nydia Huels",
        "genre": "poetry",
        "yearOfPublication": "1950",
        "price": 3355.86,
        "stock": 4
    },
    {
        "id": "c765ed89-84be-4c25-beb9-32c8f65456b5",
        "title": "The House of Mirth",
        "isbnCode": "978772877784531",
        "author": "Joette Littel",
        "genre": "mystery",
        "yearOfPublication": "2019",
        "price": 4384.36,
        "stock": 12
    },
    {
        "id": "335ba8b9-0bb6-4f8c-a9da-c31620e7487e",
        "title": "Tiger! Tiger!",
        "isbnCode": "978492409861949",
        "author": "Jamey Abbott",
        "genre": "thriller",
        "yearOfPublication": "1938",
        "price": 4049.17,
        "stock": 11
    },
    {
        "id": "53d3fad5-9ee2-4136-af5d-ae6d7ffdfe21",
        "title": "Time To Murder And Create",
        "isbnCode": "978386003545300",
        "author": "Oswaldo Hansen MD",
        "genre": "friction",
        "yearOfPublication": "1929",
        "price": 4486.36,
        "stock": 5
    },
    {
        "id": "f2493c8a-849c-45d7-98e1-d9bc0f8ea170",
        "title": "Look to Windward",
        "isbnCode": "978835933626051",
        "author": "Lisbeth Grady",
        "genre": "friction",
        "yearOfPublication": "1952",
        "price": 3839.41,
        "stock": 8
    },
    {
        "id": "0c268184-640d-41a3-8c1f-8e20b1614d6e",
        "title": "O Pioneers!",
        "isbnCode": "978091056155736",
        "author": "Deirdre Brakus",
        "genre": "horror",
        "yearOfPublication": "1932",
        "price": 2079.70,
        "stock": 1
    },
    {
        "id": "bbcceab4-7bbc-438f-acf4-8692a9965649",
        "title": "Look Homeward, Angel",
        "isbnCode": "978333872804314",
        "author": "Mrs. Phoebe Schmidt",
        "genre": "thriller",
        "yearOfPublication": "1981",
        "price": 2018.61,
        "stock": 14
    },
    {
        "id": "af510818-fa37-43e7-bde4-3bb7468030cd",
        "title": "A Passage to India",
        "isbnCode": "978689871323629",
        "author": "Elias Osinski I",
        "genre": "thriller",
        "yearOfPublication": "2020",
        "price": 2219.59,
        "stock": 1
    },
    {
        "id": "e6e48821-735e-4990-8f83-2220af134f95",
        "title": "The Road Less Traveled",
        "isbnCode": "978945245550927",
        "author": "Myra Donnelly",
        "genre": "mystery",
        "yearOfPublication": "1995",
        "price": 4476.97,
        "stock": 8
    },
    {
        "id": "9367fbdf-e687-4f2c-9714-63513590f48b",
        "title": "The Yellow Meads of Asphodel",
        "isbnCode": "978137936791858",
        "author": "Dr. Chuck Bernier",
        "genre": "thriller",
        "yearOfPublication": "2017",
        "price": 3956.01,
        "stock": 0
    },
    {
        "id": "0e286616-1e9b-46eb-90b2-ad05c49555bd",
        "title": "A Time of Gifts",
        "isbnCode": "978967855258855",
        "author": "Andreas Hills",
        "genre": "mystery",
        "yearOfPublication": "1936",
        "price": 2430.00,
        "stock": 10
    },
    {
        "id": "3f28476c-c4dd-48a8-b02b-d035cccf77a7",
        "title": "The Golden Apples of the Sun",
        "isbnCode": "978280813900567",
        "author": "Monnie Tremblay I",
        "genre": "horror",
        "yearOfPublication": "1940",
        "price": 4715.45,
        "stock": 10
    },
    {
        "id": "95a3412d-4460-4626-8c99-5f3e8e2d0abe",
        "title": "No Longer at Ease",
        "isbnCode": "978291928785137",
        "author": "Rufus Mohr III",
        "genre": "poetry",
        "yearOfPublication": "1952",
        "price": 4340.11,
        "stock": 2
    },
    {
        "id": "11663e1c-a733-4ef5-9068-c5f3c58b94a0",
        "title": "The House of Mirth",
        "isbnCode": "978588942534592",
        "author": "Brianna Wiza",
        "genre": "poetry",
        "yearOfPublication": "1986",
        "price": 3189.92,
        "stock": 5
    },
    {
        "id": "f0f9ca18-a0ca-41b5-b27e-f7e45dbadefe",
        "title": "The Wind's Twelve Quarters",
        "isbnCode": "978504098208040",
        "author": "Willia Waelchi",
        "genre": "friction",
        "yearOfPublication": "1954",
        "price": 4545.43,
        "stock": 12
    },
    {
        "id": "c1c83d83-9f4c-49f8-834f-895538868770",
        "title": "The Other Side of Silence",
        "isbnCode": "978945591204995",
        "author": "Kandice Christiansen",
        "genre": "poetry",
        "yearOfPublication": "1995",
        "price": 2094.71,
        "stock": 9
    },
    {
        "id": "9aefd207-3fd3-48a4-a5eb-ca3b0054fef8",
        "title": "Time of our Darkness",
        "isbnCode": "978658403574514",
        "author": "Leslie Feest Sr.",
        "genre": "mystery",
        "yearOfPublication": "2008",
        "price": 3246.70,
        "stock": 5
    },
    {
        "id": "f1cade55-8738-4ae1-86fd-4f49b2849847",
        "title": "Arms and the Man",
        "isbnCode": "978737847763344",
        "author": "Manuel Rutherford",
        "genre": "thriller",
        "yearOfPublication": "1950",
        "price": 4122.73,
        "stock": 19
    },
    {
        "id": "c9426d2b-7a95-4ae3-b497-7c3767edccf3",
        "title": "Things Fall Apart",
        "isbnCode": "978718276946058",
        "author": "Candance King",
        "genre": "mystery",
        "yearOfPublication": "2009",
        "price": 2124.86,
        "stock": 14
    },
    {
        "id": "59e2860c-7d09-497f-b590-96c5ec704f86",
        "title": "The Cricket on the Hearth",
        "isbnCode": "978148298617374",
        "author": "Lance Jacobson",
        "genre": "mystery",
        "yearOfPublication": "1938",
        "price": 3833.34,
        "stock": 11
    },
    {
        "id": "20b16957-d59f-4ceb-bb99-8e4fb1c9224b",
        "title": "The Soldier's Art",
        "isbnCode": "978623947903769",
        "author": "Daniel Heaney",
        "genre": "friction",
        "yearOfPublication": "1988",
        "price": 2954.02,
        "stock": 1
    },
    {
        "id": "f3c5a2ef-f5e2-4afc-a271-f0c1a53a945b",
        "title": "The Heart Is a Lonely Hunter",
        "isbnCode": "978252827141284",
        "author": "Guadalupe Renner PhD",
        "genre": "thriller",
        "yearOfPublication": "1996",
        "price": 2493.34,
        "stock": 5
    },
    {
        "id": "2bc45eb4-fb3b-4801-b6bf-0365405f9199",
        "title": "Little Hands Clapping",
        "isbnCode": "978142437093091",
        "author": "Raymonde Kreiger",
        "genre": "poetry",
        "yearOfPublication": "1941",
        "price": 2878.81,
        "stock": 1
    },
    {
        "id": "4e40bc68-d9a1-4366-a2cf-9e538cbd18df",
        "title": "Precious Bane",
        "isbnCode": "978204367587472",
        "author": "Beula Tremblay",
        "genre": "friction",
        "yearOfPublication": "1995",
        "price": 3362.63,
        "stock": 19
    },
    {
        "id": "1d6d6abe-bef3-402c-80ab-6a80cd9e770e",
        "title": "The Way of All Flesh",
        "isbnCode": "978498229377803",
        "author": "Christine O'Reilly",
        "genre": "mystery",
        "yearOfPublication": "1997",
        "price": 2744.41,
        "stock": 5
    },
    {
        "id": "3f0eb0d0-e1e9-4131-a723-25e6121d2ded",
        "title": "Vanity Fair",
        "isbnCode": "978290152774389",
        "author": "Ms. Clayton Reynolds",
        "genre": "poetry",
        "yearOfPublication": "1973",
        "price": 2239.57,
        "stock": 18
    },
    {
        "id": "0c3fd8ce-1d69-497b-a573-6b9b3727a8b0",
        "title": "The Stars' Tennis Balls",
        "isbnCode": "978682650293265",
        "author": "Elanor McKenzie",
        "genre": "mystery",
        "yearOfPublication": "2021",
        "price": 2393.47,
        "stock": 9
    },
    {
        "id": "7c4656bf-5453-4e77-a9a6-1a5bfbcb6c00",
        "title": "Dying of the Light",
        "isbnCode": "978892578294952",
        "author": "Adrian Rodriguez",
        "genre": "thriller",
        "yearOfPublication": "1963",
        "price": 4455.33,
        "stock": 2
    },
    {
        "id": "f92cea22-8e7e-468a-9144-f69674c5fb4b",
        "title": "By Grand Central Station I Sat Down and Wept",
        "isbnCode": "978107575318703",
        "author": "Richard Gusikowski",
        "genre": "poetry",
        "yearOfPublication": "1948",
        "price": 2578.37,
        "stock": 3
    },
    {
        "id": "d2723d09-a55b-4dcc-b8aa-14ef20b8af22",
        "title": "Butter In a Lordly Dish",
        "isbnCode": "978020223554827",
        "author": "Dallas Mohr",
        "genre": "mystery",
        "yearOfPublication": "1929",
        "price": 4924.10,
        "stock": 16
    },
    {
        "id": "e14d53b5-f0d4-497e-986a-e4fc57935ee3",
        "title": "Beneath the Bleeding",
        "isbnCode": "978060341964575",
        "author": "Dr. Madelaine Bechtelar",
        "genre": "mystery",
        "yearOfPublication": "2008",
        "price": 4628.87,
        "stock": 11
    },
    {
        "id": "a43b88f4-12b7-480a-8bae-53063065eb1a",
        "title": "The Needle's Eye",
        "isbnCode": "978591612616607",
        "author": "Morris Terry",
        "genre": "poetry",
        "yearOfPublication": "1937",
        "price": 2378.76,
        "stock": 14
    },
    {
        "id": "c6e8b32e-8bad-4728-9122-e219c9f2af42",
        "title": "When the Green Woods Laugh",
        "isbnCode": "978306350965279",
        "author": "Kerry Kirlin",
        "genre": "mystery",
        "yearOfPublication": "1940",
        "price": 3381.34,
        "stock": 9
    },
    {
        "id": "b2289069-8a11-4560-acb4-193b22a80f11",
        "title": "Infinite Jest",
        "isbnCode": "978366230666316",
        "author": "Sung Kiehn",
        "genre": "mystery",
        "yearOfPublication": "1931",
        "price": 3476.87,
        "stock": 13
    },
    {
        "id": "841355ac-cf38-4901-a503-7abb97e4bd4a",
        "title": "Taming a Sea Horse",
        "isbnCode": "978320735272391",
        "author": "Ellis Bradtke",
        "genre": "horror",
        "yearOfPublication": "1980",
        "price": 4489.03,
        "stock": 6
    },
    {
        "id": "5905a32f-4241-4cb4-aea8-45c51885a23d",
        "title": "What's Become of Waring",
        "isbnCode": "978830536451745",
        "author": "Diego Steuber DDS",
        "genre": "mystery",
        "yearOfPublication": "2003",
        "price": 4867.51,
        "stock": 8
    },
    {
        "id": "cbb9e7ef-354e-476d-aaf1-89bc7ef79da3",
        "title": "The Wives of Bath",
        "isbnCode": "978778478033135",
        "author": "Ms. Kati Bergstrom",
        "genre": "friction",
        "yearOfPublication": "2021",
        "price": 2777.92,
        "stock": 4
    },
    {
        "id": "d8ad4687-e43b-40ab-b655-52511e606c31",
        "title": "To Say Nothing of the Dog",
        "isbnCode": "978323858390353",
        "author": "Imogene Becker",
        "genre": "mystery",
        "yearOfPublication": "1948",
        "price": 3250.82,
        "stock": 18
    },
    {
        "id": "9c043a1e-5d00-473f-9be7-1d6143ccbcd2",
        "title": "Bury My Heart at Wounded Knee",
        "isbnCode": "978633093376798",
        "author": "Terrell VonRueden",
        "genre": "friction",
        "yearOfPublication": "1965",
        "price": 2766.24,
        "stock": 14
    },
    {
        "id": "ad68454c-0926-4573-a519-511469df3e4b",
        "title": "Let Us Now Praise Famous Men",
        "isbnCode": "978507723472365",
        "author": "Joey Stehr",
        "genre": "poetry",
        "yearOfPublication": "1943",
        "price": 3497.34,
        "stock": 3
    },
    {
        "id": "8eff7dc8-ddde-454e-bbb3-9994ac4cd1a5",
        "title": "The Torment of Others",
        "isbnCode": "978913276471264",
        "author": "Wei Dicki IV",
        "genre": "horror",
        "yearOfPublication": "1973",
        "price": 4724.26,
        "stock": 18
    },
    {
        "id": "0afc6e41-a1e2-48a2-814a-e8e76ffa3c7a",
        "title": "The Cricket on the Hearth",
        "isbnCode": "978261803182799",
        "author": "Windy Kulas",
        "genre": "mystery",
        "yearOfPublication": "1983",
        "price": 2216.11,
        "stock": 9
    },
    {
        "id": "ce6f96ea-9a6c-4a15-ba1d-2f5c1f7499b5",
        "title": "Tender Is the Night",
        "isbnCode": "978313505877401",
        "author": "Jame Casper",
        "genre": "poetry",
        "yearOfPublication": "1970",
        "price": 3946.79,
        "stock": 17
    },
    {
        "id": "7b3334d9-052b-4cda-bdbb-c72f44b291e4",
        "title": "A Time to Kill",
        "isbnCode": "978834943743645",
        "author": "Bruce Kertzmann Jr.",
        "genre": "poetry",
        "yearOfPublication": "1959",
        "price": 3306.18,
        "stock": 19
    },
    {
        "id": "d92fd701-a3ff-4d53-b9db-ae1054aa681e",
        "title": "Absalom, Absalom!",
        "isbnCode": "978615367013520",
        "author": "Izola Grady II",
        "genre": "poetry",
        "yearOfPublication": "2005",
        "price": 2124.50,
        "stock": 2
    },
    {
        "id": "218acf00-cc65-432b-a7aa-7b6d1eb73a0e",
        "title": "No Longer at Ease",
        "isbnCode": "978085338984422",
        "author": "Lowell Leffler",
        "genre": "horror",
        "yearOfPublication": "1948",
        "price": 3571.68,
        "stock": 9
    },
    {
        "id": "bcf00e68-e4f6-4e76-9254-f522fd77eeec",
        "title": "Bury My Heart at Wounded Knee",
        "isbnCode": "978636519355147",
        "author": "Rochelle Powlowski Sr.",
        "genre": "poetry",
        "yearOfPublication": "1973",
        "price": 3015.65,
        "stock": 9
    },
    {
        "id": "f702c799-5eb2-4209-b40d-e9cab94c00aa",
        "title": "The Green Bay Tree",
        "isbnCode": "978013419644172",
        "author": "Denver Fahey",
        "genre": "thriller",
        "yearOfPublication": "2003",
        "price": 3991.42,
        "stock": 18
    },
    {
        "id": "2a8aabc8-e1a8-4464-95a3-edf3570e5ef6",
        "title": "Sleep the Brave",
        "isbnCode": "978100601045703",
        "author": "Keneth Shields",
        "genre": "horror",
        "yearOfPublication": "1938",
        "price": 3075.64,
        "stock": 17
    }
]

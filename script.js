const contentData = [
    { id: 1, title: 'The Dark Knight Rises', type: 'movie', imdbId: 'tt1345836', year: 2012, rating: '8.4', quality: '4K', desc: 'Batman returns to defend Gotham against the ruthless terrorist Bane.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg' },
    { id: 2, title: 'Inception', type: 'movie', imdbId: 'tt1375666', year: 2010, rating: '8.8', quality: '4K', desc: 'A thief who steals corporate secrets through dream-sharing technology.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg' },
    { id: 3, title: 'Interstellar', type: 'movie', imdbId: 'tt0816692', year: 2014, rating: '8.7', quality: '4K', desc: 'Explorers travel through a wormhole in search of a new home for humanity.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg' },
    { id: 4, title: 'Stranger Things', type: 'series', imdbId: 'tt4574334', year: 2016, rating: '8.7', quality: '4K', desc: 'A small town uncovers a mystery involving secret experiments and supernatural forces.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg' },
    { id: 5, title: 'Money Heist', type: 'series', imdbId: 'tt6468322', year: 2017, rating: '8.3', quality: '4K', desc: 'A criminal mastermind plans the biggest heist in history.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
    { id: 6, title: 'The Witcher', type: 'series', imdbId: 'tt5180504', year: 2019, rating: '8.2', quality: '4K', desc: 'Geralt of Rivia struggles to find his place in a world of beasts and men.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg' },
    { id: 7, title: 'Avengers: Endgame', type: 'movie', imdbId: 'tt4154796', year: 2019, rating: '8.4', quality: '4K', desc: 'The Avengers assemble to undo the devastation caused by Thanos.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg' },
    { id: 8, title: 'Squid Game', type: 'series', imdbId: 'tt10919420', year: 2021, rating: '8.0', quality: '4K', desc: 'Cash-strapped players compete in deadly children\'s games for a massive prize.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg' },
    { id: 9, title: 'Joker', type: 'movie', imdbId: 'tt7286456', year: 2019, rating: '8.4', quality: '4K', desc: 'A troubled comedian embarks on a downward spiral of crime in Gotham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { id: 10, title: 'Breaking Bad', type: 'series', imdbId: 'tt0903747', year: 2008, rating: '9.5', quality: '4K', desc: 'A chemistry teacher turned meth manufacturer builds a criminal empire.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg' },
    { id: 11, title: 'Tenet', type: 'movie', imdbId: 'tt6723592', year: 2020, rating: '7.3', quality: '4K', desc: 'A man travels through time to prevent a terrorist attack from the future.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg' },
    { id: 12, title: 'Dark', type: 'series', imdbId: 'tt5753856', year: 2017, rating: '8.7', quality: '4K', desc: 'Two missing children expose the secrets of four interconnected families.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1DLjjvSWMYo17B7wuz6YikB96hH.jpg' },
    { id: 13, title: 'The Shawshank Redemption', type: 'movie', imdbId: 'tt0111161', year: 1994, rating: '9.3', quality: '4K', desc: 'A banker wrongly imprisoned forms a decades-long friendship and plots escape.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg' },
    { id: 14, title: 'Game of Thrones', type: 'series', imdbId: 'tt0944947', year: 2011, rating: '9.2', quality: '4K', desc: 'Noble families wage war for the Iron Throne while an ancient enemy returns.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg' },
    { id: 15, title: 'The Matrix', type: 'movie', imdbId: 'tt0133093', year: 1999, rating: '8.7', quality: '4K', desc: 'A hacker discovers reality is a simulation and joins a rebellion against machines.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg' },
    { id: 16, title: 'The Boys', type: 'series', imdbId: 'tt1190634', year: 2019, rating: '8.4', quality: '4K', desc: 'Vigilantes take down corrupt superheroes who abuse their powers.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg' },
    { id: 17, title: 'Fight Club', type: 'movie', imdbId: 'tt0137523', year: 1999, rating: '8.8', quality: '4K', desc: 'An insomniac and a soap salesman form an underground fight club.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg' },
    { id: 18, title: 'Narcos', type: 'series', imdbId: 'tt2707408', year: 2015, rating: '8.0', quality: '4K', desc: 'The true story of Pablo Escobar and the DEA agents hunting him.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg' },
    { id: 19, title: 'Oppenheimer', type: 'movie', imdbId: 'tt15398776', year: 2023, rating: '8.4', quality: '4K', desc: 'J. Robert Oppenheimer and the development of the atomic bomb.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { id: 20, title: 'Peaky Blinders', type: 'series', imdbId: 'tt2442560', year: 2013, rating: '8.5', quality: '4K', desc: 'A gangster family builds a criminal empire in 1919 Birmingham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg' },
    { id: 21, title: 'The Lord of the Rings: Return of the King', type: 'movie', imdbId: 'tt0167260', year: 2003, rating: '8.9', quality: '4K', desc: 'The final battle for Middle-earth begins as Frodo journeys to Mordor.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' },
    { id: 22, title: 'Wednesday', type: 'series', imdbId: 'tt13443470', year: 2022, rating: '8.2', quality: '4K', desc: 'Wednesday Addams investigates a murder spree at Nevermore Academy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg' },
    { id: 23, title: 'Pulp Fiction', type: 'movie', imdbId: 'tt0110912', year: 1994, rating: '8.9', quality: '4K', desc: 'Intertwining tales of violence, redemption, and hitmen in Los Angeles.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg' },
    { id: 24, title: 'Sherlock', type: 'series', imdbId: 'tt1475582', year: 2010, rating: '9.1', quality: '4K', desc: 'A modern Sherlock Holmes solves complex crimes across London.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg' },
    { id: 25, title: 'Spider-Man: No Way Home', type: 'movie', imdbId: 'tt10872600', year: 2021, rating: '8.3', quality: '4K', desc: 'Spider-Man unleashes chaos across the multiverse after a wish.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg' },
    { id: 26, title: 'House of the Dragon', type: 'series', imdbId: 'tt11198330', year: 2022, rating: '8.4', quality: '4K', desc: 'The Targaryen civil war that tore Westeros apart.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg' },
    { id: 27, title: 'Gladiator', type: 'movie', imdbId: 'tt0172495', year: 2000, rating: '8.5', quality: '4K', desc: 'A betrayed Roman general seeks vengeance against a corrupt emperor.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg' },
    { id: 28, title: 'Alice in Borderland', type: 'series', imdbId: 'tt10795658', year: 2020, rating: '8.1', quality: '4K', desc: 'Players compete in deadly games in a deserted Tokyo.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/Ac8ruycRXzgcsndTZFK6ouGA0FA.jpg' },
    { id: 29, title: 'Iron Man', type: 'movie', imdbId: 'tt0371746', year: 2008, rating: '7.7', quality: '4K', desc: 'Billionaire inventor Tony Stark creates a powerful suit of armor to fight evil.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg' },
    { id: 30, title: 'The Incredible Hulk', type: 'movie', imdbId: 'tt0800080', year: 2008, rating: '6.2', quality: '4K', desc: 'Scientist Bruce Banner becomes the Hulk while evading the military.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg' },
    { id: 31, title: 'Iron Man 2', type: 'movie', imdbId: 'tt1228705', year: 2010, rating: '6.9', quality: '4K', desc: 'Tony Stark faces pressure from the government and a powerful new enemy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg' },
    { id: 32, title: 'Thor', type: 'movie', imdbId: 'tt0800369', year: 2011, rating: '6.8', quality: '4K', desc: 'The mighty Thor is cast down to Earth to learn what it takes to be a hero.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg' },
    { id: 33, title: 'Captain America: The First Avenger', type: 'movie', imdbId: 'tt0458339', year: 2011, rating: '7.0', quality: '4K', desc: 'Steve Rogers transforms into super-soldier Captain America during WWII.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg' },
    { id: 34, title: 'The Avengers', type: 'movie', imdbId: 'tt0848228', year: 2012, rating: '8.0', quality: '4K', desc: 'Earth\'s mightiest heroes team up to save the world from Loki.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg' },
    { id: 35, title: 'Iron Man 3', type: 'movie', imdbId: 'tt1300854', year: 2013, rating: '6.9', quality: '4K', desc: 'Tony Stark faces a formidable terrorist called the Mandarin.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg' },
    { id: 36, title: 'Thor: The Dark World', type: 'movie', imdbId: 'tt1981115', year: 2013, rating: '6.5', quality: '4K', desc: 'Thor battles an ancient race led by the vengeful Malekith.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg' },
    { id: 37, title: 'Captain America: The Winter Soldier', type: 'movie', imdbId: 'tt1843866', year: 2014, rating: '7.7', quality: '4K', desc: 'Captain America uncovers a conspiracy within S.H.I.E.L.D.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg' },
    { id: 38, title: 'Guardians of the Galaxy', type: 'movie', imdbId: 'tt2015381', year: 2014, rating: '7.9', quality: '4K', desc: 'A ragtag group of intergalactic misfits must save the galaxy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg' },
    { id: 39, title: 'Avengers: Age of Ultron', type: 'movie', imdbId: 'tt2395427', year: 2015, rating: '7.3', quality: '4K', desc: 'The Avengers face the rogue A.I. Ultron intent on human extinction.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg' },
    { id: 40, title: 'Ant-Man', type: 'movie', imdbId: 'tt0478970', year: 2015, rating: '7.1', quality: '4K', desc: 'A master thief uses a shrinking suit to pull off a heist.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg' },
    { id: 41, title: 'Captain America: Civil War', type: 'movie', imdbId: 'tt3498820', year: 2016, rating: '7.4', quality: '4K', desc: 'The Avengers split into factions over government oversight.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg' },
    { id: 42, title: 'Doctor Strange', type: 'movie', imdbId: 'tt1211837', year: 2016, rating: '7.4', quality: '4K', desc: 'A brilliant surgeon becomes a sorcerer to defend the world.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg' },
    { id: 43, title: 'Guardians of the Galaxy Vol. 2', type: 'movie', imdbId: 'tt3896198', year: 2017, rating: '7.6', quality: '4K', desc: 'The Guardians unravel the mystery of Peter Quill\'s parentage.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg' },
    { id: 44, title: 'Spider-Man: Homecoming', type: 'movie', imdbId: 'tt2250912', year: 2017, rating: '7.3', quality: '4K', desc: 'Peter Parker balances high school life with being Spider-Man.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg' },
    { id: 45, title: 'Thor: Ragnarok', type: 'movie', imdbId: 'tt3501632', year: 2017, rating: '7.6', quality: '4K', desc: 'Thor races to stop Ragnarok and the destruction of Asgard.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg' },
    { id: 46, title: 'Black Panther', type: 'movie', imdbId: 'tt1825683', year: 2018, rating: '7.4', quality: '4K', desc: 'King T\'Challa defends Wakanda from threats within and without.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg' },
    { id: 47, title: 'Avengers: Infinity War', type: 'movie', imdbId: 'tt4154756', year: 2018, rating: '8.2', quality: '4K', desc: 'The Avengers face Thanos in a battle for the fate of the universe.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
    { id: 48, title: 'Ant-Man and the Wasp', type: 'movie', imdbId: 'tt5095030', year: 2018, rating: '6.9', quality: '4K', desc: 'Scott Lang suits up again to rescue Hope\'s mother from the quantum realm.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/cFQEO687n1K6umXbInzocxcnAQz.jpg' },
    { id: 49, title: 'Captain Marvel', type: 'movie', imdbId: 'tt4154664', year: 2019, rating: '6.8', quality: '4K', desc: 'Carol Danvers becomes one of the universe\'s most powerful heroes.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg' },
    { id: 50, title: 'Spider-Man: Far From Home', type: 'movie', imdbId: 'tt6320628', year: 2019, rating: '7.4', quality: '4K', desc: 'Peter Parker goes on a European trip and faces new threats.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg' },
    { id: 51, title: 'Black Widow', type: 'movie', imdbId: 'tt3480822', year: 2021, rating: '7.2', quality: '4K', desc: 'Natasha Romanoff confronts her past as a spy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg' },
    { id: 52, title: 'Shang-Chi and the Legend of the Ten Rings', type: 'movie', imdbId: 'tt9376612', year: 2021, rating: '7.5', quality: '4K', desc: 'Shang-Chi must confront his past and the Ten Rings organization.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/9f2Q0U3IOsLgrI2HkvldwSABZy5.jpg' },
    { id: 53, title: 'Eternals', type: 'movie', imdbId: 'tt9032400', year: 2021, rating: '6.8', quality: '4K', desc: 'Ancient aliens reunite to defend Earth from the Deviants.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/lFByFSLV5WDJEv3KabbdAF959F2.jpg' },
    { id: 54, title: 'Doctor Strange in the Multiverse of Madness', type: 'movie', imdbId: 'tt9419884', year: 2022, rating: '7.2', quality: '4K', desc: 'Doctor Strange traverses alternate realities to confront a new adversary.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg' },
    { id: 55, title: 'Thor: Love and Thunder', type: 'movie', imdbId: 'tt10648342', year: 2022, rating: '6.4', quality: '4K', desc: 'Thor enlists help to battle Gorr the God Butcher.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg' },
    { id: 56, title: 'Black Panther: Wakanda Forever', type: 'movie', imdbId: 'tt9114286', year: 2022, rating: '7.0', quality: '4K', desc: 'Wakanda fights to protect its future after King T\'Challa\'s death.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg' },
    { id: 57, title: 'Ant-Man and the Wasp: Quantumania', type: 'movie', imdbId: 'tt10954600', year: 2023, rating: '6.2', quality: '4K', desc: 'Scott and Hope explore the Quantum Realm and face Kang.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg' },
    { id: 58, title: 'Guardians of the Galaxy Vol. 3', type: 'movie', imdbId: 'tt6791350', year: 2023, rating: '7.9', quality: '4K', desc: 'The Guardians protect one of their own and the universe.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg' },
    { id: 59, title: 'The Marvels', type: 'movie', imdbId: 'tt10676048', year: 2023, rating: '5.9', quality: '4K', desc: 'Carol Danvers, Kamala Khan and Monica Rambeau team up.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg' },
    { id: 60, title: 'Deadpool & Wolverine', type: 'movie', imdbId: 'tt6263850', year: 2024, rating: '7.6', quality: '4K', desc: 'Deadpool teams up with Wolverine to save his homeworld.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg' },
    { id: 61, title: 'Captain America: Brave New World', type: 'movie', imdbId: 'tt14513804', year: 2025, rating: '6.0', quality: '4K', desc: 'Sam Wilson uncovers a global conspiracy as the new Captain America.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg' },
    { id: 62, title: 'The Dark Knight', type: 'movie', imdbId: 'tt0468569', year: 2008, rating: '8.5', quality: '4K', desc: 'Batman faces the chaos unleashed by the Joker in Gotham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { id: 63, title: 'Batman Begins', type: 'movie', imdbId: 'tt0372784', year: 2005, rating: '7.7', quality: '4K', desc: 'Bruce Wayne trains to become Batman and fights corruption in Gotham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sPX89Td70IDDjVr85jdSBb4rWGr.jpg' },
    { id: 64, title: 'Man of Steel', type: 'movie', imdbId: 'tt0770828', year: 2013, rating: '6.7', quality: '4K', desc: 'Superman embraces his powers to save the world from annihilation.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8GFtkImmK0K1VaUChR0n9O61CFU.jpg' },
    { id: 65, title: 'Batman v Superman: Dawn of Justice', type: 'movie', imdbId: 'tt2975590', year: 2016, rating: '6.0', quality: '4K', desc: 'Batman and Superman clash while a new threat emerges.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg' },
    { id: 66, title: 'Wonder Woman', type: 'movie', imdbId: 'tt0451279', year: 2017, rating: '7.2', quality: '4K', desc: 'An Amazon princess confronts the forces of evil in World War I.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/v4ncgZjG2Zu8ZW5al1vIZTsSjqX.jpg' },
    { id: 67, title: 'Aquaman', type: 'movie', imdbId: 'tt1477834', year: 2018, rating: '6.9', quality: '4K', desc: 'Arthur Curry discovers his destiny as king of Atlantis.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/ufl63EFcc5XpByEV2Ecdw6WJZAI.jpg' },
    { id: 68, title: 'Shazam!', type: 'movie', imdbId: 'tt0448115', year: 2019, rating: '7.0', quality: '4K', desc: 'A boy becomes an adult superhero with a single magic word.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg' },
    { id: 69, title: 'The Batman', type: 'movie', imdbId: 'tt1877830', year: 2022, rating: '7.7', quality: '4K', desc: 'Batman uncovers corruption in Gotham while hunting the Riddler.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg' },
    { id: 70, title: 'Logan', type: 'movie', imdbId: 'tt3315342', year: 2017, rating: '7.8', quality: '4K', desc: 'A weary Logan cares for Professor X and protects a young mutant.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg' },
    { id: 71, title: 'Deadpool', type: 'movie', imdbId: 'tt1431045', year: 2016, rating: '7.6', quality: '4K', desc: 'Wade Wilson becomes the antihero Deadpool and hunts his attacker.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg' },
    { id: 72, title: 'Deadpool 2', type: 'movie', imdbId: 'tt5463162', year: 2018, rating: '7.5', quality: '4K', desc: 'Deadpool battles Cable to save a young mutant\'s life.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg' },
    { id: 73, title: 'Venom', type: 'movie', imdbId: 'tt1270797', year: 2018, rating: '6.8', quality: '4K', desc: 'Eddie Brock bonds with an alien symbiote to become Venom.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg' },
    { id: 74, title: 'Spider-Man: Into the Spider-Verse', type: 'movie', imdbId: 'tt4633694', year: 2018, rating: '8.4', quality: '4K', desc: 'Miles Morales becomes Spider-Man across parallel dimensions.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg' },
    { id: 75, title: 'Spider-Man: Across the Spider-Verse', type: 'movie', imdbId: 'tt9362722', year: 2023, rating: '8.3', quality: '4K', desc: 'Miles travels the multiverse and meets the Spider Society.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg' },
    { id: 76, title: 'The Godfather', type: 'movie', imdbId: 'tt0068646', year: 1972, rating: '8.7', quality: 'HD', desc: 'The epic story of the Corleone crime family.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
    { id: 77, title: 'The Godfather Part II', type: 'movie', imdbId: 'tt0071562', year: 1974, rating: '8.6', quality: 'HD', desc: 'The rise of young Vito and the fall of Michael Corleone.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg' },
    { id: 78, title: 'Forrest Gump', type: 'movie', imdbId: 'tt0109830', year: 1994, rating: '8.5', quality: '4K', desc: 'A simple man accidentally influences major historical events.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg' },
    { id: 79, title: 'GoodFellas', type: 'movie', imdbId: 'tt0099685', year: 1990, rating: '8.5', quality: 'HD', desc: 'The true story of Henry Hill\'s rise and fall in the mafia.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg' },
    { id: 80, title: 'Saving Private Ryan', type: 'movie', imdbId: 'tt0120815', year: 1998, rating: '8.2', quality: '4K', desc: 'A WWII squad risks everything to bring a soldier home.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg' },
    { id: 81, title: 'The Prestige', type: 'movie', imdbId: 'tt0482571', year: 2006, rating: '8.2', quality: 'HD', desc: 'Two rival magicians engage in a dangerous battle of obsession.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg' },
    { id: 82, title: 'Django Unchained', type: 'movie', imdbId: 'tt1853728', year: 2012, rating: '8.2', quality: '4K', desc: 'A freed slave hunts his wife with the help of a bounty hunter.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg' },
    { id: 83, title: 'Parasite', type: 'movie', imdbId: 'tt6751668', year: 2019, rating: '8.5', quality: '4K', desc: 'A poor family infiltrates the lives of the ultra-wealthy.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    { id: 84, title: 'Everything Everywhere All at Once', type: 'movie', imdbId: 'tt6710474', year: 2022, rating: '7.7', quality: '4K', desc: 'A woman connects with alternate universe versions of herself.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/u68AjlvlutfEIcpmbYpKcdi09ut.jpg' },
    { id: 85, title: 'Dune', type: 'movie', imdbId: 'tt1160419', year: 2021, rating: '7.8', quality: '4K', desc: 'Paul Atreides journeys to the dangerous desert planet Arrakis.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg' },
    { id: 86, title: 'Dune: Part Two', type: 'movie', imdbId: 'tt15239678', year: 2024, rating: '8.1', quality: '4K', desc: 'Paul Atreides unites with the Fremen to seek revenge.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
    { id: 87, title: 'Top Gun: Maverick', type: 'movie', imdbId: 'tt1745960', year: 2022, rating: '8.2', quality: '4K', desc: 'Maverick returns to train a new generation of TOP GUN pilots.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg' },
    { id: 88, title: 'John Wick', type: 'movie', imdbId: 'tt2911666', year: 2014, rating: '7.5', quality: '4K', desc: 'An ex-hitman returns to track down those who wronged him.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg' },
    { id: 89, title: 'John Wick: Chapter 4', type: 'movie', imdbId: 'tt10366206', year: 2023, rating: '7.7', quality: '4K', desc: 'John Wick finds a path to defeating the High Table.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
    { id: 90, title: 'Mad Max: Fury Road', type: 'movie', imdbId: 'tt1392190', year: 2015, rating: '7.6', quality: '4K', desc: 'Two rebels fight to restore order in a post-apocalyptic wasteland.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg' },
    { id: 91, title: 'Whiplash', type: 'movie', imdbId: 'tt2582802', year: 2014, rating: '8.4', quality: 'HD', desc: 'A drummer pursues perfection under a ruthless instructor.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg' },
    { id: 92, title: 'La La Land', type: 'movie', imdbId: 'tt3783958', year: 2016, rating: '7.9', quality: '4K', desc: 'An aspiring actress and a jazz musician chase their dreams in LA.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg' },
    { id: 93, title: 'Chernobyl', type: 'series', imdbId: 'tt7366338', year: 2019, rating: '8.7', quality: '4K', desc: 'The true story of the catastrophic nuclear accident.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg' },
    { id: 94, title: 'The Mandalorian', type: 'series', imdbId: 'tt8111088', year: 2019, rating: '8.4', quality: '4K', desc: 'A lone bounty hunter travels through the outer reaches of the galaxy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg' },
    { id: 95, title: 'The Last of Us', type: 'series', imdbId: 'tt3581920', year: 2023, rating: '8.4', quality: '4K', desc: 'Joel smuggles Ellie across a post-apocalyptic United States.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg' },
    { id: 96, title: 'Succession', type: 'series', imdbId: 'tt7660850', year: 2018, rating: '8.3', quality: '4K', desc: 'The Roy family battles for control of their media empire.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg' },
    { id: 97, title: 'Better Call Saul', type: 'series', imdbId: 'tt3032476', year: 2015, rating: '8.7', quality: '4K', desc: 'Jimmy McGill transforms into the criminal lawyer Saul Goodman.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg' },
    { id: 98, title: 'Band of Brothers', type: 'series', imdbId: 'tt0185906', year: 2001, rating: '8.6', quality: 'HD', desc: 'Easy Company\'s journey through WWII from training to victory.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/pGzV187ogXzgJrvPRy2YPi29ofH.jpg' },
    { id: 99, title: 'The Crown', type: 'series', imdbId: 'tt4786824', year: 2016, rating: '8.2', quality: '4K', desc: 'The inside story of Queen Elizabeth II\'s reign.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg' },
    { id: 100, title: 'Fargo', type: 'series', imdbId: 'tt2802850', year: 2014, rating: '8.3', quality: '4K', desc: 'An anthology series of crime stories set in Minnesota.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/a3VW6khsyUVKrG0GBCWFG3NzWPX.jpg' },
    { id: 101, title: 'The Departed', type: 'movie', imdbId: 'tt0407887', year: 2006, rating: '8.2', quality: 'HD', desc: 'An undercover cop and a mole in the police try to identify each other.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg' },
    { id: 102, title: 'The Silence of the Lambs', type: 'movie', imdbId: 'tt0102926', year: 1991, rating: '8.6', quality: 'HD', desc: 'An FBI trainee seeks help from a cannibalistic serial killer.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg' },
    { id: 103, title: 'Schindlers List', type: 'movie', imdbId: 'tt0108052', year: 1993, rating: '8.8', quality: 'HD', desc: 'A German businessman saves Jewish lives during the Holocaust.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg' },
    { id: 104, title: 'Pulp Fiction', type: 'movie', imdbId: 'tt0110912', year: 1994, rating: '8.9', quality: '4K', desc: 'Intertwining tales of violence, redemption, and hitmen in Los Angeles.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg' },
    { id: 105, title: 'Fight Club', type: 'movie', imdbId: 'tt0137523', year: 1999, rating: '8.8', quality: '4K', desc: 'An insomniac and a soap salesman form an underground fight club.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg' },
    { id: 106, title: 'Good Will Hunting', type: 'movie', imdbId: 'tt0119217', year: 1997, rating: '8.3', quality: 'HD', desc: 'A janitor with a gift for math is mentored by a therapist.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg' },
    { id: 107, title: 'Se7en', type: 'movie', imdbId: 'tt0114369', year: 1995, rating: '8.2', quality: '4K', desc: 'Two detectives hunt a serial killer using the seven deadly sins.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg' },
    { id: 108, title: 'The Lion King', type: 'movie', imdbId: 'tt0110357', year: 1994, rating: '8.5', quality: '4K', desc: 'A young lion prince flees his kingdom after his fathers murder.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' },
    { id: 109, title: 'Titanic', type: 'movie', imdbId: 'tt0120338', year: 1997, rating: '7.9', quality: '4K', desc: 'A romance blossoms aboard the doomed RMS Titanic.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
    { id: 110, title: 'The Social Network', type: 'movie', imdbId: 'tt1285016', year: 2010, rating: '7.8', quality: '4K', desc: 'The story of Facebooks founding and the lawsuits that followed.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
    { id: 111, title: 'The Wolf of Wall Street', type: 'movie', imdbId: 'tt0993846', year: 2013, rating: '7.9', quality: '4K', desc: 'A stockbrokers rise and fall fueled by greed and excess.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg' },
    { id: 112, title: 'Joker', type: 'movie', imdbId: 'tt7286456', year: 2019, rating: '8.4', quality: '4K', desc: 'A troubled comedian embarks on a downward spiral of crime in Gotham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { id: 113, title: 'Spider-Man: Into the Spider-Verse', type: 'movie', imdbId: 'tt4633694', year: 2018, rating: '8.4', quality: '4K', desc: 'Miles Morales becomes Spider-Man across parallel dimensions.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg' },
    { id: 114, title: 'Spider-Man: Across the Spider-Verse', type: 'movie', imdbId: 'tt9362722', year: 2023, rating: '8.3', quality: '4K', desc: 'Miles travels the multiverse and meets the Spider Society.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg' },
    { id: 115, title: 'The Batman', type: 'movie', imdbId: 'tt1877830', year: 2022, rating: '7.7', quality: '4K', desc: 'Batman uncovers corruption in Gotham while hunting the Riddler.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg' },
    { id: 116, title: 'Top Gun: Maverick', type: 'movie', imdbId: 'tt1745960', year: 2022, rating: '8.2', quality: '4K', desc: 'Maverick returns to train a new generation of TOP GUN pilots.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg' },
    { id: 117, title: 'Oppenheimer', type: 'movie', imdbId: 'tt15398776', year: 2023, rating: '8.4', quality: '4K', desc: 'J. Robert Oppenheimer and the development of the atomic bomb.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { id: 118, title: 'Barbie', type: 'movie', imdbId: 'tt1517268', year: 2023, rating: '7.5', quality: '4K', desc: 'Barbie and Ken discover the joys and perils of the real world.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
    { id: 119, title: 'Dune', type: 'movie', imdbId: 'tt1160419', year: 2021, rating: '7.8', quality: '4K', desc: 'Paul Atreides journeys to the dangerous desert planet Arrakis.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg' },
    { id: 120, title: 'Dune: Part Two', type: 'movie', imdbId: 'tt15239678', year: 2024, rating: '8.1', quality: '4K', desc: 'Paul Atreides unites with the Fremen to seek revenge.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
    { id: 121, title: 'The Matrix', type: 'movie', imdbId: 'tt0133093', year: 1999, rating: '8.7', quality: '4K', desc: 'A hacker discovers reality is a simulation and joins a rebellion.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg' },
    { id: 122, title: 'Gladiator', type: 'movie', imdbId: 'tt0172495', year: 2000, rating: '8.5', quality: '4K', desc: 'A betrayed Roman general seeks vengeance against a corrupt emperor.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg' },
    { id: 123, title: 'Saving Private Ryan', type: 'movie', imdbId: 'tt0120815', year: 1998, rating: '8.2', quality: '4K', desc: 'A WWII squad risks everything to bring a soldier home.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg' },
    { id: 124, title: 'John Wick', type: 'movie', imdbId: 'tt2911666', year: 2014, rating: '7.5', quality: '4K', desc: 'An ex-hitman returns to track down those who wronged him.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg' },
    { id: 125, title: 'John Wick: Chapter 2', type: 'movie', imdbId: 'tt4425200', year: 2017, rating: '7.4', quality: '4K', desc: 'John Wick faces a bounty on his head and must fight for survival.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg' },
    { id: 126, title: 'John Wick: Chapter 4', type: 'movie', imdbId: 'tt10366206', year: 2023, rating: '7.7', quality: '4K', desc: 'John Wick finds a path to defeating the High Table.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
    { id: 127, title: 'Mad Max: Fury Road', type: 'movie', imdbId: 'tt1392190', year: 2015, rating: '7.6', quality: '4K', desc: 'Two rebels fight to restore order in a post-apocalyptic wasteland.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg' },
    { id: 128, title: 'Star Wars: A New Hope', type: 'movie', imdbId: 'tt0076759', year: 1977, rating: '8.6', quality: '4K', desc: 'Luke Skywalker joins the Rebel Alliance to defeat the Empire.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg' },
    { id: 129, title: 'Star Wars: The Empire Strikes Back', type: 'movie', imdbId: 'tt0080684', year: 1980, rating: '8.7', quality: '4K', desc: 'The Rebels face Darth Vader in a battle for the galaxy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg' },
    { id: 130, title: 'Blade Runner 2049', type: 'movie', imdbId: 'tt1856101', year: 2017, rating: '8.0', quality: '4K', desc: 'A young blade runner uncovers a secret that threatens society.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg' },
    { id: 131, title: 'Arrival', type: 'movie', imdbId: 'tt2543164', year: 2016, rating: '7.7', quality: '4K', desc: 'A linguist races to communicate with alien visitors.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg' },
    { id: 132, title: 'The Grand Budapest Hotel', type: 'movie', imdbId: 'tt2278388', year: 2014, rating: '8.0', quality: '4K', desc: 'A hotel concierge is framed for murder in a whimsical adventure.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg' },
    { id: 133, title: 'Parasite', type: 'movie', imdbId: 'tt6751668', year: 2019, rating: '8.5', quality: '4K', desc: 'A poor family infiltrates the lives of the ultra-wealthy.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    { id: 134, title: 'Whiplash', type: 'movie', imdbId: 'tt2582802', year: 2014, rating: '8.4', quality: 'HD', desc: 'A drummer pursues perfection under a ruthless instructor.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg' },
    { id: 135, title: 'La La Land', type: 'movie', imdbId: 'tt3783958', year: 2016, rating: '7.9', quality: '4K', desc: 'An aspiring actress and a jazz musician chase their dreams in LA.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg' },
    { id: 136, title: 'Deadpool', type: 'movie', imdbId: 'tt1431045', year: 2016, rating: '7.6', quality: '4K', desc: 'Wade Wilson becomes the antihero Deadpool and hunts his attacker.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg' },
    { id: 137, title: 'Deadpool & Wolverine', type: 'movie', imdbId: 'tt6263850', year: 2024, rating: '7.6', quality: '4K', desc: 'Deadpool teams up with Wolverine to save his homeworld.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg' },
    { id: 138, title: 'Logan', type: 'movie', imdbId: 'tt3315342', year: 2017, rating: '7.8', quality: '4K', desc: 'A weary Logan cares for Professor X and protects a young mutant.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg' },
    { id: 139, title: 'The Godfather', type: 'movie', imdbId: 'tt0068646', year: 1972, rating: '8.7', quality: 'HD', desc: 'The epic story of the Corleone crime family.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
    { id: 140, title: 'The Godfather Part II', type: 'movie', imdbId: 'tt0071562', year: 1974, rating: '8.6', quality: 'HD', desc: 'The rise of young Vito and the fall of Michael Corleone.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg' },
    { id: 141, title: 'Forrest Gump', type: 'movie', imdbId: 'tt0109830', year: 1994, rating: '8.5', quality: '4K', desc: 'A simple man accidentally influences major historical events.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg' },
    { id: 142, title: 'The Prestige', type: 'movie', imdbId: 'tt0482571', year: 2006, rating: '8.2', quality: 'HD', desc: 'Two rival magicians engage in a dangerous battle of obsession.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg' },
    { id: 143, title: 'Django Unchained', type: 'movie', imdbId: 'tt1853728', year: 2012, rating: '8.2', quality: '4K', desc: 'A freed slave hunts his wife with the help of a bounty hunter.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg' },
    { id: 144, title: 'Everything Everywhere All at Once', type: 'movie', imdbId: 'tt6710474', year: 2022, rating: '7.7', quality: '4K', desc: 'A woman connects with alternate universe versions of herself.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/u68AjlvlutfEIcpmbYpKcdi09ut.jpg' },
    { id: 145, title: 'The Dark Knight', type: 'movie', imdbId: 'tt0468569', year: 2008, rating: '8.5', quality: '4K', desc: 'Batman faces the chaos unleashed by the Joker in Gotham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { id: 146, title: 'Batman Begins', type: 'movie', imdbId: 'tt0372784', year: 2005, rating: '7.7', quality: '4K', desc: 'Bruce Wayne trains to become Batman and fights corruption.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sPX89Td70IDDjVr85jdSBb4rWGr.jpg' },
    { id: 147, title: 'Breaking Bad', type: 'series', imdbId: 'tt0903747', year: 2008, rating: '9.5', quality: '4K', desc: 'A chemistry teacher turned meth manufacturer builds a criminal empire.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg' },
    { id: 148, title: 'Better Call Saul', type: 'series', imdbId: 'tt3032476', year: 2015, rating: '8.7', quality: '4K', desc: 'Jimmy McGill transforms into the criminal lawyer Saul Goodman.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg' },
    { id: 149, title: 'Chernobyl', type: 'series', imdbId: 'tt7366338', year: 2019, rating: '8.7', quality: '4K', desc: 'The true story of the catastrophic nuclear accident.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg' },
    { id: 150, title: 'The Last of Us', type: 'series', imdbId: 'tt3581920', year: 2023, rating: '8.4', quality: '4K', desc: 'Joel smuggles Ellie across a post-apocalyptic United States.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg' },
    { id: 151, title: 'Game of Thrones', type: 'series', imdbId: 'tt0944947', year: 2011, rating: '9.2', quality: '4K', desc: 'Noble families wage war for the Iron Throne while an ancient enemy returns.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg' },
    { id: 152, title: 'House of the Dragon', type: 'series', imdbId: 'tt11198330', year: 2022, rating: '8.4', quality: '4K', desc: 'The Targaryen civil war that tore Westeros apart.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg' },
    { id: 153, title: 'The Mandalorian', type: 'series', imdbId: 'tt8111088', year: 2019, rating: '8.4', quality: '4K', desc: 'A lone bounty hunter travels through the outer reaches of the galaxy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg' },
    { id: 154, title: 'The Boys', type: 'series', imdbId: 'tt1190634', year: 2019, rating: '8.4', quality: '4K', desc: 'Vigilantes take down corrupt superheroes who abuse their powers.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg' },
    { id: 155, title: 'Squid Game', type: 'series', imdbId: 'tt10919420', year: 2021, rating: '8.0', quality: '4K', desc: 'Cash-strapped players compete in deadly games for a massive prize.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg' },
    { id: 156, title: 'Money Heist', type: 'series', imdbId: 'tt6468322', year: 2017, rating: '8.3', quality: '4K', desc: 'A criminal mastermind plans the biggest heist in history.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
    { id: 157, title: 'Stranger Things', type: 'series', imdbId: 'tt4574334', year: 2016, rating: '8.7', quality: '4K', desc: 'A small town uncovers a mystery involving secret experiments.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg' },
    { id: 158, title: 'The Witcher', type: 'series', imdbId: 'tt5180504', year: 2019, rating: '8.2', quality: '4K', desc: 'Geralt of Rivia struggles to find his place in a world of beasts and men.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg' },
    { id: 159, title: 'Dark', type: 'series', imdbId: 'tt5753856', year: 2017, rating: '8.7', quality: '4K', desc: 'Two missing children expose the secrets of four interconnected families.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1DLjjvSWMYo17B7wuz6YikB96hH.jpg' },
    { id: 160, title: 'Narcos', type: 'series', imdbId: 'tt2707408', year: 2015, rating: '8.0', quality: '4K', desc: 'The true story of Pablo Escobar and the DEA agents hunting him.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg' },
    { id: 161, title: 'Peaky Blinders', type: 'series', imdbId: 'tt2442560', year: 2013, rating: '8.5', quality: '4K', desc: 'A gangster family builds a criminal empire in 1919 Birmingham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg' },
    { id: 162, title: 'Wednesday', type: 'series', imdbId: 'tt13443470', year: 2022, rating: '8.2', quality: '4K', desc: 'Wednesday Addams investigates a murder spree at Nevermore Academy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg' },
    { id: 163, title: 'Sherlock', type: 'series', imdbId: 'tt1475582', year: 2010, rating: '9.1', quality: '4K', desc: 'A modern Sherlock Holmes solves complex crimes across London.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg' },
    { id: 164, title: 'Alice in Borderland', type: 'series', imdbId: 'tt10795658', year: 2020, rating: '8.1', quality: '4K', desc: 'Players compete in deadly games in a deserted Tokyo.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/Ac8ruycRXzgcsndTZFK6ouGA0FA.jpg' },
    { id: 165, title: 'Succession', type: 'series', imdbId: 'tt7660850', year: 2018, rating: '8.3', quality: '4K', desc: 'The Roy family battles for control of their media empire.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg' },
    { id: 166, title: 'Band of Brothers', type: 'series', imdbId: 'tt0185906', year: 2001, rating: '8.6', quality: 'HD', desc: 'Easy Company\'s journey through WWII from training to victory.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/pGzV187ogXzgJrvPRy2YPi29ofH.jpg' },
    { id: 167, title: 'The Crown', type: 'series', imdbId: 'tt4786824', year: 2016, rating: '8.2', quality: '4K', desc: 'The inside story of Queen Elizabeth II\'s reign.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg' },
    { id: 168, title: 'Fargo', type: 'series', imdbId: 'tt2802850', year: 2014, rating: '8.3', quality: '4K', desc: 'An anthology series of crime stories set in Minnesota.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/a3VW6khsyUVKrG0GBCWFG3NzWPX.jpg' },
    { id: 169, title: 'GoodFellas', type: 'movie', imdbId: 'tt0099685', year: 1990, rating: '8.5', quality: 'HD', desc: 'The true story of Henry Hill\'s rise and fall in the mafia.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg' },
    { id: 170, title: 'The Shining', type: 'movie', imdbId: 'tt0081505', year: 1980, rating: '8.0', quality: '4K', desc: 'A family heads to an isolated hotel where a dark presence lurks.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uAR0AWqhQL1hQa69UDEbb2rE5Wx.jpg' },
    { id: 171, title: 'Back to the Future', type: 'movie', imdbId: 'tt0088763', year: 1985, rating: '8.4', quality: '4K', desc: 'A teen travels back in time with a DeLorean time machine.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg' },
    { id: 172, title: 'Jurassic Park', type: 'movie', imdbId: 'tt0107290', year: 1993, rating: '8.2', quality: '4K', desc: 'Dinosaurs are cloned and run wild in a theme park.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/fjTU1Bgh3KJu4aatZil3sofR2zC.jpg' },
    { id: 173, title: 'Terminator 2: Judgment Day', type: 'movie', imdbId: 'tt0103064', year: 1991, rating: '8.4', quality: '4K', desc: 'A cyborg protects a young John Connor from a deadly new Terminator.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/jFTVD4XoWQTcg7wdyJKa8PEds5q.jpg' },
    { id: 174, title: 'Alien', type: 'movie', imdbId: 'tt0078748', year: 1979, rating: '8.1', quality: '4K', desc: 'The crew of a spaceship encounters a deadly alien creature.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg' },
    { id: 175, title: 'Aliens', type: 'movie', imdbId: 'tt0090605', year: 1986, rating: '8.2', quality: '4K', desc: 'Ripley returns to fight an Alien hive with a marine squad.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg' },
    { id: 176, title: 'Predator', type: 'movie', imdbId: 'tt0093773', year: 1987, rating: '7.6', quality: '4K', desc: 'A team of commandos is hunted by an extraterrestrial warrior.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg' },
    { id: 177, title: 'Die Hard', type: 'movie', imdbId: 'tt0095016', year: 1988, rating: '8.2', quality: '4K', desc: 'A cop takes on terrorists in a Los Angeles skyscraper.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7Bjd8kfmDSOzpmhySpEhkUyK2oH.jpg' },
    { id: 178, title: 'Braveheart', type: 'movie', imdbId: 'tt0112573', year: 1995, rating: '8.1', quality: 'HD', desc: 'Scottish warrior William Wallace leads a rebellion against England.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg' },
    { id: 179, title: 'Casablanca', type: 'movie', imdbId: 'tt0034583', year: 1942, rating: '8.5', quality: 'HD', desc: 'A cynical American helps a former lover escape Casablanca.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/lGCEKlJo2CnWydQj7aamY7s1S7Q.jpg' },
    { id: 180, title: 'Psycho', type: 'movie', imdbId: 'tt0054215', year: 1960, rating: '8.5', quality: 'HD', desc: 'A woman on the run checks into a motel with a dark secret.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg' }
];

const SOURCES = [
    { name: 'Source 1', url: 'https://streamimdb.ru/embed/movie/' },
    { name: 'Source 2', url: 'https://gemma416okl.com/play/' }
];
let currentSource = 1;
const ITEMS_PER_LOAD = 10;

const ROW_CONFIG = [
    { id: 'trending', title: 'Trending Now', type: null },
    { id: 'new', title: 'New Releases', type: null, filter: function(item) { return item.year >= 2022; } },
    { id: 'toprated', title: 'Top Rated', type: null, filter: function(item) { return parseFloat(item.rating) >= 8.2; } },
    { id: 'movies', title: 'Movies', type: 'movie' },
    { id: 'series', title: 'Web Series', type: 'series' },
    { id: 'classics', title: 'Classics', type: null, filter: function(item) { return item.year < 2000; } }
];

let loadedCounts = {};
let currentFilter = 'all';
let searchActive = false;
let currentItem = null;

const homeView = document.getElementById('homeView');
const watchView = document.getElementById('watchView');
const categoryRows = document.getElementById('categoryRows');
const searchResults = document.getElementById('searchResults');
const searchHeader = document.getElementById('searchHeader');
const searchResultsTitle = document.getElementById('searchResultsTitle');
const searchClear = document.getElementById('searchClear');
const browseView = document.getElementById('browseView');
const videoFrame = document.getElementById('videoFrame');
const embedLoader = document.getElementById('embedLoader');
const embedError = document.getElementById('embedError');
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-links a');
const backBtn = document.getElementById('backBtn');
const sourceBtn = document.getElementById('sourceBtn');
const watchTitle = document.getElementById('watchTitle');
const watchMetaTitle = document.getElementById('watchMetaTitle');
const watchMetaInfo = document.getElementById('watchMetaInfo');

const rowCache = {};

function getItemsForRow(rowId) {
    if (rowCache[rowId]) return rowCache[rowId];
    const config = ROW_CONFIG.find(r => r.id === rowId);
    if (!config) return [];
    var items;
    if (config.filter) {
        items = contentData.filter(config.filter);
    } else if (config.type) {
        items = contentData.filter(function(i) { return i.type === config.type; });
    } else {
        items = [...contentData].sort(function() { return Math.random() - 0.5; });
    }
    rowCache[rowId] = items;
    return items;
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.dataset.id = item.id;

    const langsHtml = item.langs.map(function(l) {
        return '<span class="lang">' + l + '</span>';
    }).join('');

    card.innerHTML =
        '<div class="movie-poster">'
        + '<img src="' + item.poster + '" alt="' + item.title + '" loading="lazy" onerror="this.nextElementSibling.style.display=\'flex\';this.style.display=\'none\';">'
        + '<div class="fallback-poster" style="display:none;"><div class="poster-label">' + item.title + '</div></div>'
        + '<button class="movie-play-btn"></button>'
        + '<div class="movie-hover-overlay">'
        + '<div class="movie-hover-title">' + item.title + '</div>'
        + '<div class="movie-hover-meta">'
        + '<span>' + item.year + '</span>'
        + '<span>' + item.rating + '</span>'
        + '<span class="quality-badge">' + item.quality + '</span>'
        + '</div>'
        + '<div class="movie-hover-desc">' + item.desc + '</div>'
        + '<div class="movie-hover-langs">' + langsHtml + '</div>'
        + '</div>'
        + '</div>';

    card.addEventListener('click', function() { openWatch(item.id); });
    return card;
}

function loadMoreRow(rowId) {
    const allItems = getItemsForRow(rowId);
    const loaded = loadedCounts[rowId] || 0;
    if (loaded >= allItems.length) return;
    const track = document.getElementById('track-' + rowId);
    if (!track) return;
    const nextBatch = allItems.slice(loaded, loaded + ITEMS_PER_LOAD);
    nextBatch.forEach(function(item) {
        track.appendChild(createCard(item));
    });
    loadedCounts[rowId] = loaded + nextBatch.length;
}

function renderRow(rowId) {
    const allItems = getItemsForRow(rowId);
    const loaded = loadedCounts[rowId] || 0;
    const itemsToShow = allItems.slice(0, loaded);
    const track = document.getElementById('track-' + rowId);
    if (!track) return;
    track.innerHTML = '';
    itemsToShow.forEach(function(item) {
        track.appendChild(createCard(item));
    });
    requestAnimationFrame(function() { fillRow(rowId); });
}

function fillRow(rowId) {
    const track = document.getElementById('track-' + rowId);
    if (!track) return;
    const allItems = getItemsForRow(rowId);
    var loaded = loadedCounts[rowId] || 0;
    if (loaded >= allItems.length) return;
    if (track.scrollWidth > track.clientWidth + 20) return;
    loadMoreRow(rowId);
    requestAnimationFrame(function() { fillRow(rowId); });
}

function onRowScroll(rowId) {
    const track = document.getElementById('track-' + rowId);
    if (!track) return;
    const allItems = getItemsForRow(rowId);
    const loaded = loadedCounts[rowId] || 0;
    if (loaded >= allItems.length) return;

    const threshold = 200;
    const scrolledToEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - threshold;
    if (scrolledToEnd) {
        loadMoreRow(rowId);
    }
}

function scrollRow(rowId, direction) {
    const track = document.getElementById('track-' + rowId);
    if (!track) return;
    const card = track.querySelector('.movie-card');
    const scrollAmount = card ? card.offsetWidth * 3 + 8 * 3 : 600;
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function buildRows() {
    categoryRows.innerHTML = '';
    ROW_CONFIG.forEach(function(config) {
        loadedCounts[config.id] = ITEMS_PER_LOAD;
        const section = document.createElement('section');
        section.className = 'category-row';

        const header = document.createElement('div');
        header.className = 'row-header';

        const title = document.createElement('h3');
        title.className = 'row-title';
        title.textContent = config.title;
        header.appendChild(title);

        const trackWrapper = document.createElement('div');
        trackWrapper.className = 'row-track-wrapper';

        const scrollLeft = document.createElement('button');
        scrollLeft.className = 'scroll-btn scroll-left';
        scrollLeft.innerHTML = '<';
        scrollLeft.setAttribute('aria-label', 'Scroll left');

        const track = document.createElement('div');
        track.className = 'row-track';
        track.id = 'track-' + config.id;

        const scrollRight = document.createElement('button');
        scrollRight.className = 'scroll-btn scroll-right';
        scrollRight.innerHTML = '>';
        scrollRight.setAttribute('aria-label', 'Scroll right');

        scrollLeft.addEventListener('click', function() { scrollRow(config.id, -1); });
        scrollRight.addEventListener('click', function() { scrollRow(config.id, 1); });

        track.addEventListener('scroll', function() { onRowScroll(config.id); });

        trackWrapper.appendChild(scrollLeft);
        trackWrapper.appendChild(track);
        trackWrapper.appendChild(scrollRight);

        section.appendChild(header);
        section.appendChild(trackWrapper);
        categoryRows.appendChild(section);

        renderRow(config.id);
    });
}

function renderSearchResults(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
        searchResults.classList.add('hidden');
        searchHeader.classList.add('hidden');
        browseView.classList.remove('hidden');
        searchActive = false;
        return;
    }

    searchActive = true;
    const matches = contentData.filter(function(item) {
        return item.title.toLowerCase().includes(q)
            || item.desc.toLowerCase().includes(q)
            || item.langs.some(function(l) { return l.toLowerCase().includes(q); })
            || item.type.includes(q);
    });

    searchResultsTitle.textContent = 'Results for "' + query + '"' + (matches.length ? ' (' + matches.length + ')' : '');
    searchHeader.classList.remove('hidden');
    browseView.classList.add('hidden');
    searchResults.classList.remove('hidden');
    searchResults.innerHTML = '';

    if (matches.length === 0) {
        searchResults.innerHTML = '<div class="no-results" style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);"><p style="font-size:15px;">No results found</p><p style="font-size:12px;margin-top:4px;">Try a different search term</p></div>';
        return;
    }

    matches.forEach(function(item) {
        searchResults.appendChild(createCard(item));
    });
}

function buildEmbedUrl(item) {
    return SOURCES[currentSource].url + item.imdbId;
}

function openWatch(id) {
    var item = contentData.find(function(i) { return i.id === id; });
    if (!item) return;

    currentItem = item;
    sourceBtn.textContent = SOURCES[currentSource].name;
    watchMetaTitle.textContent = item.title + ' (' + item.year + ')';
    watchTitle.textContent = 'Now Playing - ' + item.title;
    watchMetaInfo.innerHTML = '<span>' + item.year + '</span><span>' + item.rating + '</span>'
        + '<span style="background:var(--accent-cyan);color:#000;padding:1px 6px;border-radius:2px;font-size:11px;font-weight:700;">' + item.quality + '</span>'
        + '<span style="background:var(--accent-pink);color:#fff;padding:1px 6px;border-radius:2px;font-size:11px;font-weight:700;">' + (item.type === 'movie' ? 'Movie' : 'Series') + '</span>';

    homeView.classList.add('hidden');
    watchView.classList.remove('hidden');
    embedError.classList.add('hidden');
    loadPlayer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadPlayer() {
    if (!currentItem) return;
    videoFrame.src = buildEmbedUrl(currentItem);
    embedLoader.classList.remove('hidden');
    embedError.classList.add('hidden');
}

function goHome() {
    watchView.classList.add('hidden');
    homeView.classList.remove('hidden');
    videoFrame.src = '';
    currentItem = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleFilter(filter) {
    currentFilter = filter;
    navLinks.forEach(function(link) {
        link.classList.toggle('active', link.dataset.filter === filter);
    });

    if (searchActive) return;

    var rows = categoryRows.querySelectorAll('.category-row');
    rows.forEach(function(row) {
        var rowId = row.querySelector('.row-track').id.replace('track-', '');
        var config = ROW_CONFIG.find(function(r) { return r.id === rowId; });
        if (filter === 'all') {
            row.style.display = '';
        } else if (config.type === filter) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

videoFrame.addEventListener('load', function() { embedLoader.classList.add('hidden'); });
videoFrame.addEventListener('error', function() { embedLoader.classList.add('hidden'); embedError.classList.remove('hidden'); });
backBtn.addEventListener('click', goHome);
sourceBtn.addEventListener('click', function() {
    currentSource = (currentSource + 1) % SOURCES.length;
    sourceBtn.textContent = SOURCES[currentSource].name;
    if (currentItem) {
        embedLoader.classList.remove('hidden');
        embedError.classList.add('hidden');
        videoFrame.src = buildEmbedUrl(currentItem);
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !watchView.classList.contains('hidden')) goHome();
});

searchInput.addEventListener('input', function() {
    renderSearchResults(searchInput.value);
});

searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); renderSearchResults(searchInput.value); }
});

searchClear.addEventListener('click', function() {
    searchInput.value = '';
    renderSearchResults('');
    browseView.classList.remove('hidden');
    searchHeader.classList.add('hidden');
    searchActive = false;
    handleFilter(currentFilter);
});

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (!homeView.classList.contains('hidden')) handleFilter(link.dataset.filter);
    });
});

document.getElementById('logoLink').addEventListener('click', function(e) {
    e.preventDefault();
    goHome();
});

buildRows();
handleFilter('all');

var resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        ROW_CONFIG.forEach(function(cfg) { fillRow(cfg.id); });
    }, 300);
});

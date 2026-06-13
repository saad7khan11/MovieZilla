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
    { id: 100, title: 'Fargo', type: 'series', imdbId: 'tt2802850', year: 2014, rating: '8.3', quality: '4K', desc: 'An anthology series of crime stories set in Minnesota.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/a3VW6khsyUVKrG0GBCWFG3NzWPX.jpg' }
];

const EMBED_BASE = 'https://gemma416okl.com/play/';

let currentFilter = 'all';
let currentItem = null;

const homeView = document.getElementById('homeView');
const watchView = document.getElementById('watchView');
const movieGrid = document.getElementById('movieGrid');
const videoFrame = document.getElementById('videoFrame');
const embedLoader = document.getElementById('embedLoader');
const embedError = document.getElementById('embedError');
const sectionTitle = document.getElementById('sectionTitle');
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-links a');
const filterBtns = document.querySelectorAll('.filter-btn');
const backBtn = document.getElementById('backBtn');
const watchTitle = document.getElementById('watchTitle');
const watchMetaTitle = document.getElementById('watchMetaTitle');
const watchMetaInfo = document.getElementById('watchMetaInfo');

function renderCards(data) {
    movieGrid.innerHTML = '';
    if (data.length === 0) {
        movieGrid.innerHTML = '<div class="no-results" style="grid-column:1/-1;text-align:center;padding:60px 20px;"><div style="font-size:48px;margin-bottom:12px;opacity:0.3;">&#x1F50D;</div><h3 style="font-size:20px;color:var(--text-secondary);margin-bottom:6px;">No content found</h3><p style="color:var(--text-muted);font-size:14px;">Try a different search or filter</p></div>';
        return;
    }
    data.forEach(function(item, index) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.dataset.id = item.id;
        card.style.transitionDelay = (index * 0.05) + 's';

        const typeLabel = item.type === 'movie' ? 'Movie' : 'Series';

        card.innerHTML = '<div class="movie-poster">'
            + '<img src="' + item.poster + '" alt="' + item.title + '" loading="lazy" onerror="this.nextElementSibling.style.display=\'flex\';this.style.display=\'none\';">'
            + '<div class="fallback-poster" style="display:none;"><div class="poster-icon">' + (item.type === 'movie' ? '&#127910;' : '&#128250;') + '</div><div class="poster-label">' + item.title + '</div></div>'
            + '<div class="movie-badge-top"><span class="movie-badge quality">' + item.quality + '</span><span class="movie-badge type">' + typeLabel + '</span><span class="movie-badge rating">' + item.rating + '</span></div>'
            + '<div class="movie-play-overlay"><div class="play-icon-circle">&#9654;</div></div></div>'
            + '<div class="movie-info"><h3 class="movie-title">' + item.title + '</h3>'
            + '<div class="movie-meta"><span>&#128197; ' + item.year + '</span><span>&#11088; ' + item.rating + '</span></div>'
            + '<p class="movie-desc">' + item.desc + '</p>'
            + '<div class="movie-langs">' + item.langs.map(function(l) { return '<span class="lang-tag ' + l.toLowerCase() + '">' + l + '</span>'; }).join('') + '</div></div>';

        card.addEventListener('click', function() { openWatch(item.id); });
        movieGrid.appendChild(card);
    });

    requestAnimationFrame(function() {
        var cards = movieGrid.querySelectorAll('.movie-card');
        cards.forEach(function(card, i) {
            setTimeout(function() { card.classList.add('visible'); }, i * 60);
        });
    });
}

function buildEmbedUrl(item) {
    return EMBED_BASE + item.imdbId;
}

function openWatch(id) {
    var item = contentData.find(function(i) { return i.id === id; });
    if (!item) return;

    currentItem = item;
    watchMetaTitle.textContent = item.title + ' (' + item.year + ')';
    watchTitle.textContent = 'Now Playing \u2014 ' + item.title;
    watchMetaInfo.innerHTML = '<span>\u{1F4C5} ' + item.year + '</span><span>\u2B50 ' + item.rating + '</span>'
        + '<span style="background:rgba(0,240,255,0.85);color:#000;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700;">' + item.quality + '</span>'
        + '<span style="background:rgba(255,0,122,0.85);color:#fff;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700;">' + (item.type === 'movie' ? 'Movie' : 'Series') + '</span>';

    homeView.classList.add('hidden');
    watchView.classList.remove('hidden');
    embedError.classList.add('hidden');
    loadPlayer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadPlayer() {
    if (!currentItem) return;
    var url = buildEmbedUrl(currentItem);
    videoFrame.src = url;
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

function updateSectionTitle(filter) {
    var titles = { all: 'All Content', movie: 'Movies', series: 'Web Series' };
    sectionTitle.textContent = titles[filter] || 'All Content';
}

function filterContent(filter) {
    currentFilter = filter;
    var searchTerm = searchInput.value.toLowerCase().trim();

    var filtered = contentData.slice();
    if (filter !== 'all') filtered = filtered.filter(function(item) { return item.type === filter; });
    if (searchTerm) {
        filtered = filtered.filter(function(item) {
            return item.title.toLowerCase().includes(searchTerm)
                || item.desc.toLowerCase().includes(searchTerm)
                || item.langs.some(function(l) { return l.toLowerCase().includes(searchTerm); });
        });
    }

    updateSectionTitle(filter);
    renderCards(filtered);

    navLinks.forEach(function(link) {
        var f = link.dataset.filter;
        link.classList.toggle('active', f === filter);
    });
    filterBtns.forEach(function(btn) {
        var f = btn.dataset.filter;
        btn.classList.toggle('active', f === filter);
    });
}

videoFrame.addEventListener('load', function() { embedLoader.classList.add('hidden'); });
videoFrame.addEventListener('error', function() { embedLoader.classList.add('hidden'); embedError.classList.remove('hidden'); });
backBtn.addEventListener('click', goHome);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !watchView.classList.contains('hidden')) goHome();
});

searchInput.addEventListener('input', function() { filterContent(currentFilter); });
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); filterContent(currentFilter); }
});

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (!homeView.classList.contains('hidden')) filterContent(link.dataset.filter);
    });
});

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() { filterContent(btn.dataset.filter); });
});

document.getElementById('logoLink').addEventListener('click', function(e) {
    e.preventDefault();
    goHome();
});

var style = document.createElement('style');
style.textContent = '.movie-card { transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.35s ease, box-shadow 0.4s ease; }';
document.head.appendChild(style);

filterContent('all');
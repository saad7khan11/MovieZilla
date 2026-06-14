const contentData = [
    { id: 1, title: 'The Dark Knight Rises', type: 'movie', imdbId: 'tt1345836', tmdbId: 49026, year: 2012, rating: '8.4', quality: '4K', desc: 'Batman returns to defend Gotham against the ruthless terrorist Bane.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg' },
    { id: 2, title: 'Inception', type: 'movie', imdbId: 'tt1375666', tmdbId: 27205, year: 2010, rating: '8.8', quality: '4K', desc: 'A thief who steals corporate secrets through dream-sharing technology.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg' },
    { id: 3, title: 'Interstellar', type: 'movie', imdbId: 'tt0816692', tmdbId: 157336, year: 2014, rating: '8.7', quality: '4K', desc: 'Explorers travel through a wormhole in search of a new home for humanity.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg' },
    { id: 4, title: 'Stranger Things', type: 'series', imdbId: 'tt4574334', tmdbId: 66732, year: 2016, rating: '8.7', quality: '4K', desc: 'A small town uncovers a mystery involving secret experiments and supernatural forces.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg' },
    { id: 5, title: 'Money Heist', type: 'series', imdbId: 'tt6468322', tmdbId: 71446, year: 2017, rating: '8.3', quality: '4K', desc: 'A criminal mastermind plans the biggest heist in history.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
    { id: 6, title: 'The Witcher', type: 'series', imdbId: 'tt5180504', tmdbId: 71912, year: 2019, rating: '8.2', quality: '4K', desc: 'Geralt of Rivia struggles to find his place in a world of beasts and men.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg' },
    { id: 7, title: 'Avengers: Endgame', type: 'movie', imdbId: 'tt4154796', tmdbId: 299534, year: 2019, rating: '8.4', quality: '4K', desc: 'The Avengers assemble to undo the devastation caused by Thanos.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg' },
    { id: 8, title: 'Squid Game', type: 'series', imdbId: 'tt10919420', tmdbId: 93405, year: 2021, rating: '8.0', quality: '4K', desc: 'Cash-strapped players compete in deadly children\'s games for a massive prize.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg' },
    { id: 9, title: 'Joker', type: 'movie', imdbId: 'tt7286456', tmdbId: 475557, year: 2019, rating: '8.4', quality: '4K', desc: 'A troubled comedian embarks on a downward spiral of crime in Gotham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { id: 10, title: 'Breaking Bad', type: 'series', imdbId: 'tt0903747', tmdbId: 1396, year: 2008, rating: '9.5', quality: '4K', desc: 'A chemistry teacher turned meth manufacturer builds a criminal empire.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg' },
    { id: 11, title: 'Tenet', type: 'movie', imdbId: 'tt6723592', tmdbId: 577922, year: 2020, rating: '7.3', quality: '4K', desc: 'A man travels through time to prevent a terrorist attack from the future.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg' },
    { id: 12, title: 'Dark', type: 'series', imdbId: 'tt5753856', tmdbId: 70523, year: 2017, rating: '8.7', quality: '4K', desc: 'Two missing children expose the secrets of four interconnected families.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1DLjjvSWMYo17B7wuz6YikB96hH.jpg' },
    { id: 13, title: 'The Shawshank Redemption', type: 'movie', imdbId: 'tt0111161', tmdbId: 278, year: 1994, rating: '9.3', quality: '4K', desc: 'A banker wrongly imprisoned forms a decades-long friendship and plots escape.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg' },
    { id: 14, title: 'Game of Thrones', type: 'series', imdbId: 'tt0944947', tmdbId: 1399, year: 2011, rating: '9.2', quality: '4K', desc: 'Noble families wage war for the Iron Throne while an ancient enemy returns.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg' },
    { id: 15, title: 'The Matrix', type: 'movie', imdbId: 'tt0133093', tmdbId: 603, year: 1999, rating: '8.7', quality: '4K', desc: 'A hacker discovers reality is a simulation and joins a rebellion against machines.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg' },
    { id: 16, title: 'The Boys', type: 'series', imdbId: 'tt1190634', tmdbId: 76479, year: 2019, rating: '8.4', quality: '4K', desc: 'Vigilantes take down corrupt superheroes who abuse their powers.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg' },
    { id: 17, title: 'Fight Club', type: 'movie', imdbId: 'tt0137523', tmdbId: 550, year: 1999, rating: '8.8', quality: '4K', desc: 'An insomniac and a soap salesman form an underground fight club.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg' },
    { id: 18, title: 'Narcos', type: 'series', imdbId: 'tt2707408', tmdbId: 63351, year: 2015, rating: '8.0', quality: '4K', desc: 'The true story of Pablo Escobar and the DEA agents hunting him.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg' },
    { id: 19, title: 'Oppenheimer', type: 'movie', imdbId: 'tt15398776', tmdbId: 872585, year: 2023, rating: '8.4', quality: '4K', desc: 'J. Robert Oppenheimer and the development of the atomic bomb.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { id: 20, title: 'Peaky Blinders', type: 'series', imdbId: 'tt2442560', tmdbId: 60574, year: 2013, rating: '8.5', quality: '4K', desc: 'A gangster family builds a criminal empire in 1919 Birmingham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg' },
    { id: 21, title: 'The Lord of the Rings: Return of the King', type: 'movie', imdbId: 'tt0167260', tmdbId: 122, year: 2003, rating: '8.9', quality: '4K', desc: 'The final battle for Middle-earth begins as Frodo journeys to Mordor.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' },
    { id: 22, title: 'Wednesday', type: 'series', imdbId: 'tt13443470', tmdbId: 119051, year: 2022, rating: '8.2', quality: '4K', desc: 'Wednesday Addams investigates a murder spree at Nevermore Academy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg' },
    { id: 23, title: 'Pulp Fiction', type: 'movie', imdbId: 'tt0110912', tmdbId: 680, year: 1994, rating: '8.9', quality: '4K', desc: 'Intertwining tales of violence, redemption, and hitmen in Los Angeles.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg' },
    { id: 24, title: 'Sherlock', type: 'series', imdbId: 'tt1475582', tmdbId: 19885, year: 2010, rating: '9.1', quality: '4K', desc: 'A modern Sherlock Holmes solves complex crimes across London.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg' },
    { id: 25, title: 'Spider-Man: No Way Home', type: 'movie', imdbId: 'tt10872600', tmdbId: 634649, year: 2021, rating: '8.3', quality: '4K', desc: 'Spider-Man unleashes chaos across the multiverse after a wish.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg' },
    { id: 26, title: 'House of the Dragon', type: 'series', imdbId: 'tt11198330', tmdbId: 94997, year: 2022, rating: '8.4', quality: '4K', desc: 'The Targaryen civil war that tore Westeros apart.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg' },
    { id: 27, title: 'Gladiator', type: 'movie', imdbId: 'tt0172495', tmdbId: 98, year: 2000, rating: '8.5', quality: '4K', desc: 'A betrayed Roman general seeks vengeance against a corrupt emperor.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg' },
    { id: 28, title: 'Alice in Borderland', type: 'series', imdbId: 'tt10795658', tmdbId: 110316, year: 2020, rating: '8.1', quality: '4K', desc: 'Players compete in deadly games in a deserted Tokyo.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/Ac8ruycRXzgcsndTZFK6ouGA0FA.jpg' },
    { id: 29, title: 'Iron Man', type: 'movie', imdbId: 'tt0371746', tmdbId: 1726, year: 2008, rating: '7.7', quality: '4K', desc: 'Billionaire inventor Tony Stark creates a powerful suit of armor to fight evil.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg' },
    { id: 30, title: 'The Incredible Hulk', type: 'movie', imdbId: 'tt0800080', tmdbId: 1724, year: 2008, rating: '6.2', quality: '4K', desc: 'Scientist Bruce Banner becomes the Hulk while evading the military.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg' },
    { id: 31, title: 'Iron Man 2', type: 'movie', imdbId: 'tt1228705', tmdbId: 10138, year: 2010, rating: '6.9', quality: '4K', desc: 'Tony Stark faces pressure from the government and a powerful new enemy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg' },
    { id: 32, title: 'Thor', type: 'movie', imdbId: 'tt0800369', tmdbId: 10195, year: 2011, rating: '6.8', quality: '4K', desc: 'The mighty Thor is cast down to Earth to learn what it takes to be a hero.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg' },
    { id: 33, title: 'Captain America: The First Avenger', type: 'movie', imdbId: 'tt0458339', tmdbId: 1771, year: 2011, rating: '7.0', quality: '4K', desc: 'Steve Rogers transforms into super-soldier Captain America during WWII.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg' },
    { id: 34, title: 'The Avengers', type: 'movie', imdbId: 'tt0848228', tmdbId: 24428, year: 2012, rating: '8.0', quality: '4K', desc: 'Earth\'s mightiest heroes team up to save the world from Loki.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg' },
    { id: 35, title: 'Iron Man 3', type: 'movie', imdbId: 'tt1300854', tmdbId: 68721, year: 2013, rating: '6.9', quality: '4K', desc: 'Tony Stark faces a formidable terrorist called the Mandarin.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg' },
    { id: 36, title: 'Thor: The Dark World', type: 'movie', imdbId: 'tt1981115', tmdbId: 76338, year: 2013, rating: '6.5', quality: '4K', desc: 'Thor battles an ancient race led by the vengeful Malekith.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg' },
    { id: 37, title: 'Captain America: The Winter Soldier', type: 'movie', imdbId: 'tt1843866', tmdbId: 100402, year: 2014, rating: '7.7', quality: '4K', desc: 'Captain America uncovers a conspiracy within S.H.I.E.L.D.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg' },
    { id: 38, title: 'Guardians of the Galaxy', type: 'movie', imdbId: 'tt2015381', tmdbId: 118340, year: 2014, rating: '7.9', quality: '4K', desc: 'A ragtag group of intergalactic misfits must save the galaxy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg' },
    { id: 39, title: 'Avengers: Age of Ultron', type: 'movie', imdbId: 'tt2395427', tmdbId: 99861, year: 2015, rating: '7.3', quality: '4K', desc: 'The Avengers face the rogue A.I. Ultron intent on human extinction.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg' },
    { id: 40, title: 'Ant-Man', type: 'movie', imdbId: 'tt0478970', tmdbId: 102899, year: 2015, rating: '7.1', quality: '4K', desc: 'A master thief uses a shrinking suit to pull off a heist.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg' },
    { id: 41, title: 'Captain America: Civil War', type: 'movie', imdbId: 'tt3498820', tmdbId: 271110, year: 2016, rating: '7.4', quality: '4K', desc: 'The Avengers split into factions over government oversight.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg' },
    { id: 42, title: 'Doctor Strange', type: 'movie', imdbId: 'tt1211837', tmdbId: 284052, year: 2016, rating: '7.4', quality: '4K', desc: 'A brilliant surgeon becomes a sorcerer to defend the world.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg' },
    { id: 43, title: 'Guardians of the Galaxy Vol. 2', type: 'movie', imdbId: 'tt3896198', tmdbId: 283995, year: 2017, rating: '7.6', quality: '4K', desc: 'The Guardians unravel the mystery of Peter Quill\'s parentage.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg' },
    { id: 44, title: 'Spider-Man: Homecoming', type: 'movie', imdbId: 'tt2250912', tmdbId: 315635, year: 2017, rating: '7.3', quality: '4K', desc: 'Peter Parker balances high school life with being Spider-Man.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg' },
    { id: 45, title: 'Thor: Ragnarok', type: 'movie', imdbId: 'tt3501632', tmdbId: 284053, year: 2017, rating: '7.6', quality: '4K', desc: 'Thor races to stop Ragnarok and the destruction of Asgard.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg' },
    { id: 46, title: 'Black Panther', type: 'movie', imdbId: 'tt1825683', tmdbId: 284054, year: 2018, rating: '7.4', quality: '4K', desc: 'King T\'Challa defends Wakanda from threats within and without.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg' },
    { id: 47, title: 'Avengers: Infinity War', type: 'movie', imdbId: 'tt4154756', tmdbId: 299536, year: 2018, rating: '8.2', quality: '4K', desc: 'The Avengers face Thanos in a battle for the fate of the universe.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
    { id: 48, title: 'Ant-Man and the Wasp', type: 'movie', imdbId: 'tt5095030', tmdbId: 363088, year: 2018, rating: '6.9', quality: '4K', desc: 'Scott Lang suits up again to rescue Hope\'s mother from the quantum realm.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/cFQEO687n1K6umXbInzocxcnAQz.jpg' },
    { id: 49, title: 'Captain Marvel', type: 'movie', imdbId: 'tt4154664', tmdbId: 299537, year: 2019, rating: '6.8', quality: '4K', desc: 'Carol Danvers becomes one of the universe\'s most powerful heroes.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg' },
    { id: 50, title: 'Spider-Man: Far From Home', type: 'movie', imdbId: 'tt6320628', tmdbId: 429617, year: 2019, rating: '7.4', quality: '4K', desc: 'Peter Parker goes on a European trip and faces new threats.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg' },
    { id: 51, title: 'Black Widow', type: 'movie', imdbId: 'tt3480822', tmdbId: 497698, year: 2021, rating: '7.2', quality: '4K', desc: 'Natasha Romanoff confronts her past as a spy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg' },
    { id: 52, title: 'Shang-Chi and the Legend of the Ten Rings', type: 'movie', imdbId: 'tt9376612', tmdbId: 566525, year: 2021, rating: '7.5', quality: '4K', desc: 'Shang-Chi must confront his past and the Ten Rings organization.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/9f2Q0U3IOsLgrI2HkvldwSABZy5.jpg' },
    { id: 53, title: 'Eternals', type: 'movie', imdbId: 'tt9032400', tmdbId: 524434, year: 2021, rating: '6.8', quality: '4K', desc: 'Ancient aliens reunite to defend Earth from the Deviants.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/lFByFSLV5WDJEv3KabbdAF959F2.jpg' },
    { id: 54, title: 'Doctor Strange in the Multiverse of Madness', type: 'movie', imdbId: 'tt9419884', tmdbId: 453395, year: 2022, rating: '7.2', quality: '4K', desc: 'Doctor Strange traverses alternate realities to confront a new adversary.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg' },
    { id: 55, title: 'Thor: Love and Thunder', type: 'movie', imdbId: 'tt10648342', tmdbId: 616037, year: 2022, rating: '6.4', quality: '4K', desc: 'Thor enlists help to battle Gorr the God Butcher.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg' },
    { id: 56, title: 'Black Panther: Wakanda Forever', type: 'movie', imdbId: 'tt9114286', tmdbId: 505642, year: 2022, rating: '7.0', quality: '4K', desc: 'Wakanda fights to protect its future after King T\'Challa\'s death.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg' },
    { id: 57, title: 'Ant-Man and the Wasp: Quantumania', type: 'movie', imdbId: 'tt10954600', tmdbId: 640146, year: 2023, rating: '6.2', quality: '4K', desc: 'Scott and Hope explore the Quantum Realm and face Kang.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg' },
    { id: 58, title: 'Guardians of the Galaxy Vol. 3', type: 'movie', imdbId: 'tt6791350', tmdbId: 447365, year: 2023, rating: '7.9', quality: '4K', desc: 'The Guardians protect one of their own and the universe.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg' },
    { id: 59, title: 'The Marvels', type: 'movie', imdbId: 'tt10676048', tmdbId: 609681, year: 2023, rating: '5.9', quality: '4K', desc: 'Carol Danvers, Kamala Khan and Monica Rambeau team up.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg' },
    { id: 60, title: 'Deadpool & Wolverine', type: 'movie', imdbId: 'tt6263850', tmdbId: 533535, year: 2024, rating: '7.6', quality: '4K', desc: 'Deadpool teams up with Wolverine to save his homeworld.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg' },
    { id: 61, title: 'Captain America: Brave New World', type: 'movie', imdbId: 'tt14513804', tmdbId: 822119, year: 2025, rating: '6.0', quality: '4K', desc: 'Sam Wilson uncovers a global conspiracy as the new Captain America.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg' },
    { id: 62, title: 'The Dark Knight', type: 'movie', imdbId: 'tt0468569', tmdbId: 155, year: 2008, rating: '8.5', quality: '4K', desc: 'Batman faces the chaos unleashed by the Joker in Gotham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { id: 63, title: 'Batman Begins', type: 'movie', imdbId: 'tt0372784', tmdbId: 272, year: 2005, rating: '7.7', quality: '4K', desc: 'Bruce Wayne trains to become Batman and fights corruption in Gotham.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sPX89Td70IDDjVr85jdSBb4rWGr.jpg' },
    { id: 64, title: 'Man of Steel', type: 'movie', imdbId: 'tt0770828', tmdbId: 49521, year: 2013, rating: '6.7', quality: '4K', desc: 'Superman embraces his powers to save the world from annihilation.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8GFtkImmK0K1VaUChR0n9O61CFU.jpg' },
    { id: 65, title: 'Batman v Superman: Dawn of Justice', type: 'movie', imdbId: 'tt2975590', tmdbId: 209112, year: 2016, rating: '6.0', quality: '4K', desc: 'Batman and Superman clash while a new threat emerges.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg' },
    { id: 66, title: 'Wonder Woman', type: 'movie', imdbId: 'tt0451279', tmdbId: 297762, year: 2017, rating: '7.2', quality: '4K', desc: 'An Amazon princess confronts the forces of evil in World War I.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/v4ncgZjG2Zu8ZW5al1vIZTsSjqX.jpg' },
    { id: 67, title: 'Aquaman', type: 'movie', imdbId: 'tt1477834', tmdbId: 297802, year: 2018, rating: '6.9', quality: '4K', desc: 'Arthur Curry discovers his destiny as king of Atlantis.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/ufl63EFcc5XpByEV2Ecdw6WJZAI.jpg' },
    { id: 68, title: 'Shazam!', type: 'movie', imdbId: 'tt0448115', tmdbId: 287947, year: 2019, rating: '7.0', quality: '4K', desc: 'A boy becomes an adult superhero with a single magic word.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg' },
    { id: 69, title: 'The Batman', type: 'movie', imdbId: 'tt1877830', tmdbId: 414906, year: 2022, rating: '7.7', quality: '4K', desc: 'Batman uncovers corruption in Gotham while hunting the Riddler.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg' },
    { id: 70, title: 'Logan', type: 'movie', imdbId: 'tt3315342', tmdbId: 263115, year: 2017, rating: '7.8', quality: '4K', desc: 'A weary Logan cares for Professor X and protects a young mutant.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg' },
    { id: 71, title: 'Deadpool', type: 'movie', imdbId: 'tt1431045', tmdbId: 293660, year: 2016, rating: '7.6', quality: '4K', desc: 'Wade Wilson becomes the antihero Deadpool and hunts his attacker.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg' },
    { id: 72, title: 'Deadpool 2', type: 'movie', imdbId: 'tt5463162', tmdbId: 383498, year: 2018, rating: '7.5', quality: '4K', desc: 'Deadpool battles Cable to save a young mutant\'s life.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg' },
    { id: 73, title: 'Venom', type: 'movie', imdbId: 'tt1270797', tmdbId: 335983, year: 2018, rating: '6.8', quality: '4K', desc: 'Eddie Brock bonds with an alien symbiote to become Venom.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg' },
    { id: 74, title: 'Spider-Man: Into the Spider-Verse', type: 'movie', imdbId: 'tt4633694', tmdbId: 324857, year: 2018, rating: '8.4', quality: '4K', desc: 'Miles Morales becomes Spider-Man across parallel dimensions.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg' },
    { id: 75, title: 'Spider-Man: Across the Spider-Verse', type: 'movie', imdbId: 'tt9362722', tmdbId: 569094, year: 2023, rating: '8.3', quality: '4K', desc: 'Miles travels the multiverse and meets the Spider Society.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg' },
    { id: 76, title: 'The Godfather', type: 'movie', imdbId: 'tt0068646', tmdbId: 238, year: 1972, rating: '8.7', quality: 'HD', desc: 'The epic story of the Corleone crime family.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
    { id: 77, title: 'The Godfather Part II', type: 'movie', imdbId: 'tt0071562', tmdbId: 240, year: 1974, rating: '8.6', quality: 'HD', desc: 'The rise of young Vito and the fall of Michael Corleone.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg' },
    { id: 78, title: 'Forrest Gump', type: 'movie', imdbId: 'tt0109830', tmdbId: 13, year: 1994, rating: '8.5', quality: '4K', desc: 'A simple man accidentally influences major historical events.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg' },
    { id: 79, title: 'GoodFellas', type: 'movie', imdbId: 'tt0099685', tmdbId: 769, year: 1990, rating: '8.5', quality: 'HD', desc: 'The true story of Henry Hill\'s rise and fall in the mafia.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg' },
    { id: 80, title: 'Saving Private Ryan', type: 'movie', imdbId: 'tt0120815', tmdbId: 857, year: 1998, rating: '8.2', quality: '4K', desc: 'A WWII squad risks everything to bring a soldier home.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg' },
    { id: 81, title: 'The Prestige', type: 'movie', imdbId: 'tt0482571', tmdbId: 1124, year: 2006, rating: '8.2', quality: 'HD', desc: 'Two rival magicians engage in a dangerous battle of obsession.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg' },
    { id: 82, title: 'Django Unchained', type: 'movie', imdbId: 'tt1853728', tmdbId: 68718, year: 2012, rating: '8.2', quality: '4K', desc: 'A freed slave hunts his wife with the help of a bounty hunter.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg' },
    { id: 83, title: 'Parasite', type: 'movie', imdbId: 'tt6751668', tmdbId: 496243, year: 2019, rating: '8.5', quality: '4K', desc: 'A poor family infiltrates the lives of the ultra-wealthy.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    { id: 84, title: 'Everything Everywhere All at Once', type: 'movie', imdbId: 'tt6710474', tmdbId: 545611, year: 2022, rating: '7.7', quality: '4K', desc: 'A woman connects with alternate universe versions of herself.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/u68AjlvlutfEIcpmbYpKcdi09ut.jpg' },
    { id: 85, title: 'Dune', type: 'movie', imdbId: 'tt1160419', tmdbId: 438631, year: 2021, rating: '7.8', quality: '4K', desc: 'Paul Atreides journeys to the dangerous desert planet Arrakis.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg' },
    { id: 86, title: 'Dune: Part Two', type: 'movie', imdbId: 'tt15239678', tmdbId: 693134, year: 2024, rating: '8.1', quality: '4K', desc: 'Paul Atreides unites with the Fremen to seek revenge.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
    { id: 87, title: 'Top Gun: Maverick', type: 'movie', imdbId: 'tt1745960', tmdbId: 361743, year: 2022, rating: '8.2', quality: '4K', desc: 'Maverick returns to train a new generation of TOP GUN pilots.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg' },
    { id: 88, title: 'John Wick', type: 'movie', imdbId: 'tt2911666', tmdbId: 245891, year: 2014, rating: '7.5', quality: '4K', desc: 'An ex-hitman returns to track down those who wronged him.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg' },
    { id: 89, title: 'John Wick: Chapter 4', type: 'movie', imdbId: 'tt10366206', tmdbId: 603692, year: 2023, rating: '7.7', quality: '4K', desc: 'John Wick finds a path to defeating the High Table.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
    { id: 90, title: 'Mad Max: Fury Road', type: 'movie', imdbId: 'tt1392190', tmdbId: 76341, year: 2015, rating: '7.6', quality: '4K', desc: 'Two rebels fight to restore order in a post-apocalyptic wasteland.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg' },
    { id: 91, title: 'Whiplash', type: 'movie', imdbId: 'tt2582802', tmdbId: 244786, year: 2014, rating: '8.4', quality: 'HD', desc: 'A drummer pursues perfection under a ruthless instructor.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg' },
    { id: 92, title: 'La La Land', type: 'movie', imdbId: 'tt3783958', tmdbId: 313369, year: 2016, rating: '7.9', quality: '4K', desc: 'An aspiring actress and a jazz musician chase their dreams in LA.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg' },
    { id: 93, title: 'Chernobyl', type: 'series', imdbId: 'tt7366338', tmdbId: 87108, year: 2019, rating: '8.7', quality: '4K', desc: 'The true story of the catastrophic nuclear accident.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg' },
    { id: 94, title: 'The Mandalorian', type: 'series', imdbId: 'tt8111088', tmdbId: 82856, year: 2019, rating: '8.4', quality: '4K', desc: 'A lone bounty hunter travels through the outer reaches of the galaxy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg' },
    { id: 95, title: 'The Last of Us', type: 'series', imdbId: 'tt3581920', tmdbId: 100088, year: 2023, rating: '8.4', quality: '4K', desc: 'Joel smuggles Ellie across a post-apocalyptic United States.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg' },
    { id: 96, title: 'Succession', type: 'series', imdbId: 'tt7660850', tmdbId: 76331, year: 2018, rating: '8.3', quality: '4K', desc: 'The Roy family battles for control of their media empire.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg' },
    { id: 97, title: 'Better Call Saul', type: 'series', imdbId: 'tt3032476', tmdbId: 60059, year: 2015, rating: '8.7', quality: '4K', desc: 'Jimmy McGill transforms into the criminal lawyer Saul Goodman.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg' },
    { id: 98, title: 'Band of Brothers', type: 'series', imdbId: 'tt0185906', tmdbId: 4613, year: 2001, rating: '8.6', quality: 'HD', desc: 'Easy Company\'s journey through WWII from training to victory.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/pGzV187ogXzgJrvPRy2YPi29ofH.jpg' },
    { id: 99, title: 'The Crown', type: 'series', imdbId: 'tt4786824', tmdbId: 65494, year: 2016, rating: '8.2', quality: '4K', desc: 'The inside story of Queen Elizabeth II\'s reign.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg' },
    { id: 100, title: 'Fargo', type: 'series', imdbId: 'tt2802850', tmdbId: 60622, year: 2014, rating: '8.3', quality: '4K', desc: 'An anthology series of crime stories set in Minnesota.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/a3VW6khsyUVKrG0GBCWFG3NzWPX.jpg' },
    { id: 101, title: 'The Departed', type: 'movie', imdbId: 'tt0407887', tmdbId: 1422, year: 2006, rating: '8.2', quality: 'HD', desc: 'An undercover cop and a mole in the police try to identify each other.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg' },
    { id: 102, title: 'The Silence of the Lambs', type: 'movie', imdbId: 'tt0102926', tmdbId: 274, year: 1991, rating: '8.6', quality: 'HD', desc: 'An FBI trainee seeks help from a cannibalistic serial killer.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg' },
    { id: 103, title: 'Schindlers List', type: 'movie', imdbId: 'tt0108052', tmdbId: 424, year: 1993, rating: '8.8', quality: 'HD', desc: 'A German businessman saves Jewish lives during the Holocaust.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg' },
    { id: 106, title: 'Good Will Hunting', type: 'movie', imdbId: 'tt0119217', tmdbId: 489, year: 1997, rating: '8.3', quality: 'HD', desc: 'A janitor with a gift for math is mentored by a therapist.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg' },
    { id: 107, title: 'Se7en', type: 'movie', imdbId: 'tt0114369', tmdbId: 807, year: 1995, rating: '8.2', quality: '4K', desc: 'Two detectives hunt a serial killer using the seven deadly sins.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg' },
    { id: 108, title: 'The Lion King', type: 'movie', imdbId: 'tt0110357', tmdbId: 8587, year: 1994, rating: '8.5', quality: '4K', desc: 'A young lion prince flees his kingdom after his fathers murder.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' },
    { id: 109, title: 'Titanic', type: 'movie', imdbId: 'tt0120338', tmdbId: 597, year: 1997, rating: '7.9', quality: '4K', desc: 'A romance blossoms aboard the doomed RMS Titanic.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
    { id: 110, title: 'The Social Network', type: 'movie', imdbId: 'tt1285016', tmdbId: 37799, year: 2010, rating: '7.8', quality: '4K', desc: 'The story of Facebooks founding and the lawsuits that followed.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
    { id: 111, title: 'The Wolf of Wall Street', type: 'movie', imdbId: 'tt0993846', tmdbId: 106646, year: 2013, rating: '7.9', quality: '4K', desc: 'A stockbrokers rise and fall fueled by greed and excess.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg' },
    { id: 118, title: 'Barbie', type: 'movie', imdbId: 'tt1517268', tmdbId: 346698, year: 2023, rating: '7.5', quality: '4K', desc: 'Barbie and Ken discover the joys and perils of the real world.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
    { id: 125, title: 'John Wick: Chapter 2', type: 'movie', imdbId: 'tt4425200', tmdbId: 324552, year: 2017, rating: '7.4', quality: '4K', desc: 'John Wick faces a bounty on his head and must fight for survival.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg' },
    { id: 128, title: 'Star Wars: A New Hope', type: 'movie', imdbId: 'tt0076759', tmdbId: 11, year: 1977, rating: '8.6', quality: '4K', desc: 'Luke Skywalker joins the Rebel Alliance to defeat the Empire.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg' },
    { id: 129, title: 'Star Wars: The Empire Strikes Back', type: 'movie', imdbId: 'tt0080684', tmdbId: 1891, year: 1980, rating: '8.7', quality: '4K', desc: 'The Rebels face Darth Vader in a battle for the galaxy.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg' },
    { id: 130, title: 'Blade Runner 2049', type: 'movie', imdbId: 'tt1856101', tmdbId: 335984, year: 2017, rating: '8.0', quality: '4K', desc: 'A young blade runner uncovers a secret that threatens society.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg' },
    { id: 131, title: 'Arrival', type: 'movie', imdbId: 'tt2543164', tmdbId: 329865, year: 2016, rating: '7.7', quality: '4K', desc: 'A linguist races to communicate with alien visitors.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg' },
    { id: 132, title: 'The Grand Budapest Hotel', type: 'movie', imdbId: 'tt2278388', tmdbId: 120467, year: 2014, rating: '8.0', quality: '4K', desc: 'A hotel concierge is framed for murder in a whimsical adventure.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg' },
    { id: 170, title: 'The Shining', type: 'movie', imdbId: 'tt0081505', tmdbId: 694, year: 1980, rating: '8.0', quality: '4K', desc: 'A family heads to an isolated hotel where a dark presence lurks.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uAR0AWqhQL1hQa69UDEbb2rE5Wx.jpg' },
    { id: 171, title: 'Back to the Future', type: 'movie', imdbId: 'tt0088763', tmdbId: 105, year: 1985, rating: '8.4', quality: '4K', desc: 'A teen travels back in time with a DeLorean time machine.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg' },
    { id: 172, title: 'Jurassic Park', type: 'movie', imdbId: 'tt0107290', tmdbId: 329, year: 1993, rating: '8.2', quality: '4K', desc: 'Dinosaurs are cloned and run wild in a theme park.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/fjTU1Bgh3KJu4aatZil3sofR2zC.jpg' },
    { id: 173, title: 'Terminator 2: Judgment Day', type: 'movie', imdbId: 'tt0103064', tmdbId: 280, year: 1991, rating: '8.4', quality: '4K', desc: 'A cyborg protects a young John Connor from a deadly new Terminator.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/jFTVD4XoWQTcg7wdyJKa8PEds5q.jpg' },
    { id: 174, title: 'Alien', type: 'movie', imdbId: 'tt0078748', tmdbId: 348, year: 1979, rating: '8.1', quality: '4K', desc: 'The crew of a spaceship encounters a deadly alien creature.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg' },
    { id: 175, title: 'Aliens', type: 'movie', imdbId: 'tt0090605', tmdbId: 679, year: 1986, rating: '8.2', quality: '4K', desc: 'Ripley returns to fight an Alien hive with a marine squad.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg' },
    { id: 176, title: 'Predator', type: 'movie', imdbId: 'tt0093773', tmdbId: 106, year: 1987, rating: '7.6', quality: '4K', desc: 'A team of commandos is hunted by an extraterrestrial warrior.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg' },
    { id: 177, title: 'Die Hard', type: 'movie', imdbId: 'tt0095016', tmdbId: 562, year: 1988, rating: '8.2', quality: '4K', desc: 'A cop takes on terrorists in a Los Angeles skyscraper.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7Bjd8kfmDSOzpmhySpEhkUyK2oH.jpg' },
    { id: 178, title: 'Braveheart', type: 'movie', imdbId: 'tt0112573', tmdbId: 197, year: 1995, rating: '8.1', quality: 'HD', desc: 'Scottish warrior William Wallace leads a rebellion against England.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg' },
    { id: 179, title: 'Casablanca', type: 'movie', imdbId: 'tt0034583', tmdbId: 289, year: 1942, rating: '8.5', quality: 'HD', desc: 'A cynical American helps a former lover escape Casablanca.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/lGCEKlJo2CnWydQj7aamY7s1S7Q.jpg' },
    { id: 180, title: 'Psycho', type: 'movie', imdbId: 'tt0054215', tmdbId: 539, year: 1960, rating: '8.5', quality: 'HD', desc: 'A woman on the run checks into a motel with a dark secret.', langs: ['English'], poster: 'https://image.tmdb.org/t/p/w500/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg' },

    { id: 181, title: 'Crash Landing on You', type: 'series', imdbId: 'tt10850932', tmdbId: 94796, year: 2019, rating: '8.7', quality: '4K', desc: 'A South Korean heiress accidentally paraglides into North Korea and meets a captain.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/fgBNLPr6mC8pxuR79ENAJY4nBmj.jpg' },
    { id: 182, title: 'Goblin', type: 'series', imdbId: 'tt5994362', year: 2016, rating: '8.6', quality: '4K', desc: 'A goblin seeks a bride to break his centuries-old curse.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sPkxHNw5BFvuCFGWw825TS7n6X3.jpg' },
    { id: 183, title: 'Itaewon Class', type: 'series', imdbId: 'tt11593532', year: 2020, rating: '8.2', quality: '4K', desc: 'An ex-con and his team open a bar in Itaewon seeking revenge.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qg7q0piY0fTt2enlIRHwKKRwNjS.jpg' },
    { id: 184, title: 'Kingdom', type: 'series', imdbId: 'tt8573492', year: 2019, rating: '8.3', quality: '4K', desc: 'A crown prince investigates a mysterious plague during Joseon era.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/AsICtiVtz4icMQQRwDvOzfaTzjK.jpg' },
    { id: 185, title: 'The Glory', type: 'series', imdbId: 'tt21344712', year: 2022, rating: '8.2', quality: '4K', desc: 'A woman spends decades plotting revenge against her childhood bullies.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uUM4LVlPgIrww07OoEKrGWlS1Ej.jpg' },
    { id: 186, title: 'Vincenzo', type: 'series', imdbId: 'tt13253388', year: 2021, rating: '8.4', quality: '4K', desc: 'An Italian mafia lawyer fights corruption in South Korea.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/qbkSS1cTjT4DzIwD44bdhTuYgdT.jpg' },
    { id: 187, title: 'Extraordinary Attorney Woo', type: 'series', imdbId: 'tt20869502', tmdbId: 197067, year: 2022, rating: '8.6', quality: '4K', desc: 'A brilliant autistic attorney navigates law and life in Seoul.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/zuNOQVI4rEaqwknrfQUVKtlKE2C.jpg' },
    { id: 188, title: 'All of Us Are Dead', type: 'series', imdbId: 'tt14169960', tmdbId: 99966, year: 2022, rating: '7.7', quality: '4K', desc: 'Students trapped in a high school fight for survival during a zombie outbreak.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg' },
    { id: 189, title: 'Descendants of the Sun', type: 'series', imdbId: 'tt4925000', tmdbId: 65143, year: 2016, rating: '8.3', quality: '4K', desc: 'A soldier and a doctor fall in love amid war and disaster.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/xxGomfml0x9iyPBS4StBjbRRu65.jpg' },
    { id: 190, title: 'My Mister', type: 'series', imdbId: 'tt7780756', year: 2018, rating: '8.7', quality: '4K', desc: 'A man in his 40s and a woman in her 20s heal each others wounds.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/o5cBRMF6syh4yUBgZ2Ust8LvcxA.jpg' },
    { id: 191, title: 'Reply 1988', type: 'series', imdbId: 'tt5182866', tmdbId: 64010, year: 2015, rating: '8.8', quality: '4K', desc: 'Five childhood friends and their families navigate life in 1988 Seoul.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/i3xQJlQRff4k5IMEY55l4iKaKl3.jpg' },
    { id: 192, title: 'Business Proposal', type: 'series', imdbId: 'tt18343252', year: 2022, rating: '8.1', quality: '4K', desc: 'A woman goes on a blind date in place of a friend and meets her CEO.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/iLh7L8ZuvgdxFaM9sImyv2iKYLe.jpg' },
    { id: 193, title: 'Alchemy of Souls', type: 'series', imdbId: 'tt20992382', year: 2022, rating: '8.4', quality: '4K', desc: 'A powerful sorceress trapped in a weak body meets a nobleman.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/gvOZN1NlAoL8iz9ghpES1zWA3w3.jpg' },
    { id: 194, title: 'Twenty Five Twenty One', type: 'series', imdbId: 'tt16809476', year: 2022, rating: '8.3', quality: '4K', desc: 'A fencer and a reporter chase their dreams during financial crisis.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/yCQFnmYhYf7XALMka2EoBRAFmPO.jpg' },
    { id: 195, title: 'Hometown Cha-Cha-Cha', type: 'series', imdbId: 'tt15354210', year: 2021, rating: '8.3', quality: '4K', desc: 'A dentist moves to a seaside village and meets a jack-of-all-trades.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/en6lrlJ1DhyvkeZEqrk3R6EJz1p.jpg' },
    { id: 196, title: 'Mr. Sunshine', type: 'series', imdbId: 'tt7645692', year: 2018, rating: '8.7', quality: '4K', desc: 'A Korean-born US marine returns to Joseon during foreign occupation.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/p7ljjykSsiyWstGVAwIkbdfPzRV.jpg' },
    { id: 197, title: 'Hotel del Luna', type: 'series', imdbId: 'tt10220588', tmdbId: 90447, year: 2019, rating: '8.2', quality: '4K', desc: 'A hotel manager runs a mystical hotel for ghosts in Seoul.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8bizZsXoAsOTbhyFKfBogC8mgG2.jpg' },
    { id: 198, title: 'Signal', type: 'series', imdbId: 'tt5332208', year: 2016, rating: '8.6', quality: '4K', desc: 'A walkie-talkie connects a detective from the past and a profiler in the present.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/uIskxIo84jexPhnrzm1TpsUCI9w.jpg' },
    { id: 199, title: 'Our Beloved Summer', type: 'series', imdbId: 'tt15284004', year: 2021, rating: '8.1', quality: '4K', desc: 'Exes reunite years after their high school documentary went viral.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/bA15g6OLmhQ2HkURRaCztA2jwqI.jpg' },

    { id: 200, title: 'Don\'t Look Up', type: 'movie', imdbId: 'tt11286314', tmdbId: 646380, year: 2021, rating: '7.2', quality: '4K', desc: 'Two astronomers try to warn humanity about an approaching comet.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg' },
    { id: 201, title: 'Bird Box', type: 'movie', imdbId: 'tt2737304', tmdbId: 405774, year: 2018, rating: '6.6', quality: '4K', desc: 'A woman must blindfold herself to survive entities that drive people to suicide.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg' },
    { id: 202, title: 'Red Notice', type: 'movie', imdbId: 'tt7991608', tmdbId: 512195, year: 2021, rating: '6.3', quality: '4K', desc: 'An FBI agent chases two criminals in a global art heist.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg' },
    { id: 203, title: 'The Gray Man', type: 'movie', imdbId: 'tt1649418', tmdbId: 725201, year: 2022, rating: '6.5', quality: '4K', desc: 'A CIA agent uncovers dark agency secrets and becomes a target.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg' },
    { id: 204, title: 'Glass Onion', type: 'movie', imdbId: 'tt11564570', tmdbId: 661374, year: 2022, rating: '7.3', quality: '4K', desc: 'Detective Benoit Blanc solves a murder on a Greek island billionaire retreat.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg' },
    { id: 205, title: 'Extraction', type: 'movie', imdbId: 'tt8936646', tmdbId: 545609, year: 2020, rating: '7.0', quality: '4K', desc: 'A black-market mercenary embarks on a mission to rescue a drug lord\'s son.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg' },
    { id: 206, title: 'The Old Guard', type: 'movie', imdbId: 'tt7556122', tmdbId: 547016, year: 2020, rating: '6.6', quality: '4K', desc: 'A group of immortal mercenaries must protect their secret.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg' },
    { id: 207, title: 'The Adam Project', type: 'movie', imdbId: 'tt2463208', tmdbId: 696806, year: 2022, rating: '6.7', quality: '4K', desc: 'A time-traveling pilot teams up with his younger self to save the future.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg' },
    { id: 208, title: 'Leave the World Behind', type: 'movie', imdbId: 'tt12747748', tmdbId: 726209, year: 2023, rating: '6.5', quality: '4K', desc: 'A family vacation turns into a nightmare when technology collapses.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg' },
    { id: 209, title: 'Rebel Moon', type: 'movie', imdbId: 'tt14998742', tmdbId: 848326, year: 2023, rating: '5.6', quality: '4K', desc: 'A warrior leads a rebellion against a tyrannical regent.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg' },
    { id: 210, title: 'Damsel', type: 'movie', imdbId: 'tt13452446', tmdbId: 763215, year: 2024, rating: '6.2', quality: '4K', desc: 'A young woman fights for survival after being sacrificed to a dragon.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/AgHbB9DCE9aE57zkHjSmseszh6e.jpg' },
    { id: 211, title: 'Atlas', type: 'movie', imdbId: 'tt14850236', year: 2024, rating: '5.6', quality: '4K', desc: 'A data analyst battles an AI terrorist with whom she shares a dark past.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg' },
    { id: 212, title: 'Lift', type: 'movie', imdbId: 'tt14371846', year: 2024, rating: '5.8', quality: '4K', desc: 'A master thief and his crew hijack a plane mid-flight.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/h7wJI6mctrDJ9wMbFfgrBUTn1LT.jpg' },
    { id: 213, title: 'Unfrosted', type: 'movie', imdbId: 'tt27692628', year: 2024, rating: '5.6', quality: '4K', desc: 'The epic story of the invention of Pop-Tarts breakfast pastries.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/zxcpbkiyv81u1frI7b0f6qaYufE.jpg' },
    { id: 214, title: 'The Mother', type: 'movie', imdbId: 'tt6968614', tmdbId: 552688, year: 2023, rating: '6.2', quality: '4K', desc: 'A former assassin comes out of hiding to protect her daughter.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vnRthEZz16Q9VWcP5homkHxyHoy.jpg' },
    { id: 215, title: 'Heart of Stone', type: 'movie', imdbId: 'tt13603966', tmdbId: 724209, year: 2023, rating: '6.0', quality: '4K', desc: 'A spy races against time to stop a hacker from stealing a dangerous weapon.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg' },
    { id: 216, title: 'Luther: The Fallen Sun', type: 'movie', imdbId: 'tt15679400', tmdbId: 631842, year: 2023, rating: '6.4', quality: '4K', desc: 'Detective John Luther breaks out of prison to hunt a serial killer.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/xsW7M4b4gawgFKCzcXHL2MSeswj.jpg' },
    { id: 217, title: 'The Kitchen', type: 'movie', imdbId: 'tt15727690', year: 2023, rating: '5.6', quality: '4K', desc: 'A dystopian London community fights for survival in a housing project.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/tV0hK1BiqYrYlehChv4WJXIWgmZ.jpg' },
    { id: 218, title: 'Spiderhead', type: 'movie', imdbId: 'tt11245972', tmdbId: 646385, year: 2022, rating: '5.7', quality: '4K', desc: 'Inmates at a high-tech prison volunteer for drug experiments.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/7COPO5B9AOKIB4sEkvNu0wfve3c.jpg' },
    { id: 219, title: 'The Pale Blue Eye', type: 'movie', imdbId: 'tt14138650', tmdbId: 800815, year: 2022, rating: '6.9', quality: '4K', desc: 'A retired detective investigates murders at West Point with Edgar Allan Poe.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/9xkGlFRqrN8btTLU0KQvOfn2PHr.jpg' },
    { id: 220, title: 'Train to Busan', type: 'movie', imdbId: 'tt5700672', tmdbId: 396535, year: 2016, rating: '7.6', quality: '4K', desc: 'Passengers on a high-speed train fight for survival during a sudden zombie outbreak.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg' },
    { id: 221, title: 'Peninsula', type: 'movie', imdbId: 'tt8850222', tmdbId: 581392, year: 2020, rating: '5.8', quality: '4K', desc: 'Survivors of the zombie apocalypse return to the quarantined Korean peninsula for a dangerous mission.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/eeqvAzCccAZOhU3RfbvHB3s44S6.jpg' },
    { id: 222, title: 'World War Z', type: 'movie', imdbId: 'tt0816711', tmdbId: 72190, year: 2013, rating: '7.0', quality: '4K', desc: 'A UN employee races against time to stop a global zombie pandemic from wiping out humanity.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/aCnVdvExw6UWSeQfr0tUH3jr4qG.jpg' },
    { id: 223, title: '28 Days Later', type: 'movie', imdbId: 'tt0289043', tmdbId: 170, year: 2002, rating: '7.6', quality: 'HD', desc: 'A bike courier awakens from a coma to find London overrun by infected rage-filled creatures.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sQckQRt17VaWbo39GIu0TMOiszq.jpg' },
    { id: 224, title: '28 Weeks Later', type: 'movie', imdbId: 'tt0463854', tmdbId: 1562, year: 2007, rating: '7.0', quality: '4K', desc: 'The US military attempts to rebuild society after the rage virus outbreak goes horribly wrong.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/oix0aNv1lvW3nUGspUyvSIBlpbs.jpg' },
    { id: 225, title: 'Dawn of the Dead', type: 'movie', imdbId: 'tt0363547', tmdbId: 924, year: 2004, rating: '7.3', quality: '4K', desc: 'Survivors barricade themselves inside a shopping mall during a relentless zombie apocalypse.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/ttquyxStEEctzghtA2f4PUGprDr.jpg' },
    { id: 226, title: 'Zombieland', type: 'movie', imdbId: 'tt1156398', tmdbId: 19908, year: 2009, rating: '7.5', quality: '4K', desc: 'A group of quirky survivors travels across zombie-infested America following a set of survival rules.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg' },
    { id: 227, title: 'Zombieland: Double Tap', type: 'movie', imdbId: 'tt1560220', tmdbId: 338967, year: 2019, rating: '6.7', quality: '4K', desc: 'The zombie-killing crew returns to face evolved zombies and new allies on the road.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/dtRbVsUb5O12WWO54SRpiMtHKC0.jpg' },
    { id: 228, title: 'Resident Evil', type: 'movie', imdbId: 'tt0120804', tmdbId: 1577, year: 2002, rating: '6.7', quality: '4K', desc: 'A special ops team battles the Umbrella Corporation\'s zombie outbreak in a secret underground facility.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/way9dOm4dM2sm9UMcu2PEXMTX0q.jpg' },
    { id: 229, title: 'I Am Legend', type: 'movie', imdbId: 'tt0480249', tmdbId: 6479, year: 2007, rating: '7.2', quality: '4K', desc: 'A military scientist struggles to survive alone in a post-apocalyptic New York City overrun by mutants.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg' },
    { id: 230, title: 'The Girl with All the Gifts', type: 'movie', imdbId: 'tt4547056', tmdbId: 375366, year: 2016, rating: '6.6', quality: '4K', desc: 'A gifted little girl holds the key to humanity\'s survival in a fungal zombie apocalypse.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/vdCD8z55a4RNmHQDPIpuMFqoY2B.jpg' },
    { id: 231, title: '#Alive', type: 'movie', imdbId: 'tt10620868', tmdbId: 714888, year: 2020, rating: '6.2', quality: '4K', desc: 'A gamer trapped in his apartment fights to survive during a sudden zombie outbreak in the city.', langs: ['Korean', 'English'], poster: 'https://image.tmdb.org/t/p/w500/nmh7vD2eDVRqFJoCpEzVcfGcPPf.jpg' },
    { id: 232, title: 'Army of the Dead', type: 'movie', imdbId: 'tt0993840', tmdbId: 503736, year: 2021, rating: '5.8', quality: '4K', desc: 'A group of mercenaries plans a daring heist in zombie-infested Las Vegas.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/gCIsRxzcxvmuLYeAvWgoOuSxszF.jpg' },
    { id: 233, title: 'Overlord', type: 'movie', imdbId: 'tt4530422', tmdbId: 505642, year: 2018, rating: '6.6', quality: '4K', desc: 'American paratroopers land in Nazi-occupied France on D-Day and discover horrific zombie experiments.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg' },
    { id: 234, title: 'The Walking Dead', type: 'series', imdbId: 'tt1520211', tmdbId: 1402, year: 2010, rating: '8.1', quality: '4K', desc: 'Survivors navigate a post-apocalyptic world overrun by zombies while facing threats from other humans.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/ng3cMtxYKt1OSQYqFlnKWnVsqNO.jpg' },
    { id: 235, title: 'Black Summer', type: 'series', imdbId: 'tt9184984', tmdbId: 88052, year: 2019, rating: '6.8', quality: 'HD', desc: 'A desperate mother searches for her daughter during the terrifying early days of a zombie apocalypse.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/d27fZpY8jSZDOs1k0JCL0RY0b94.jpg' },
    { id: 236, title: 'Z Nation', type: 'series', imdbId: 'tt3843152', tmdbId: 60735, year: 2014, rating: '6.7', quality: 'HD', desc: 'A ragtag group escorts the only survivor of a zombie bite across America to find a cure.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/yZevl2vHQgmosfwUdVNzviIfaWS.jpg' },
    { id: 237, title: 'iZombie', type: 'series', imdbId: 'tt3501584', tmdbId: 60625, year: 2015, rating: '7.8', quality: '4K', desc: 'A medical student turned zombie solves crimes by eating the brains of the dead.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/owhkU6KRqdXoUQpjV8uyZGPtX58.jpg' },
    { id: 238, title: 'Santa Clarita Diet', type: 'series', imdbId: 'tt5580540', tmdbId: 69372, year: 2017, rating: '7.8', quality: '4K', desc: 'A real estate agent turns into a zombie and develops a craving for human flesh.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/r63ogKm0AFoTHbNCQYYz9jjiDE2.jpg' },
    { id: 239, title: 'Daybreak', type: 'series', imdbId: 'tt8755220', tmdbId: 83478, year: 2019, rating: '6.6', quality: 'HD', desc: 'A teenage outcast searches for his lost love in a post-apocalyptic wasteland full of zombie-like creatures.', langs: ['Hindi', 'English'], poster: 'https://image.tmdb.org/t/p/w500/AbnOGmAe7harXNwRAz7XywpHr8F.jpg' }
];

const SOURCES = [
    { name: 'Source 1', url: 'https://streamimdb.ru/embed/movie/', idType: 'imdb' },
    { name: 'Source 2', url: 'https://gemma416okl.com/play/', idType: 'imdb' },
    { name: 'VidEasy', url: 'https://player.videasy.net/', idType: 'tmdb', hasTypePrefix: true, needsEpisode: true },
    { name: 'Vidsrc', url: 'https://vidsrc.to/embed/', idType: 'tmdb', hasTypePrefix: true, needsEpisode: true }
];
let currentSource = 2;
const ITEMS_PER_LOAD = 10;
var currentEpisode = 1;
var currentSeason = 1;

var TMDB_API_KEY = ''; // Set your TMDB API v3 key at https://www.themoviedb.org/settings/api (free, needed for accurate season/episode counts)
var TMDB_IMG_BASE = 'https://image.tmdb.org/t/p/w500';
var tmdbCache = {};
var tvMetaCache = {};
var DEFAULT_SEASONS = 5;
var DEFAULT_EPISODES = 12;

async function resolveImdbToTmdb(imdbId) {
    if (!TMDB_API_KEY) return null;
    if (tmdbCache[imdbId]) return tmdbCache[imdbId];
    try {
        var resp = await fetch('https://api.themoviedb.org/3/find/' + imdbId + '?api_key=' + TMDB_API_KEY + '&external_source=imdb_id');
        var data = await resp.json();
        var result = data.movie_results && data.movie_results[0] ? data.movie_results[0].id
            : data.tv_results && data.tv_results[0] ? data.tv_results[0].id
            : null;
        if (result) tmdbCache[imdbId] = result;
        return result;
    } catch (e) {
        return null;
    }
}

async function fetchTMDBMeta(tmdbId, type) {
    if (!TMDB_API_KEY) return null;
    var cacheKey = type + '_' + tmdbId;
    if (tmdbCache[cacheKey]) return tmdbCache[cacheKey];
    try {
        var endpoint = type === 'tv' ? 'tv' : 'movie';
        var resp = await fetch('https://api.themoviedb.org/3/' + endpoint + '/' + tmdbId + '?api_key=' + TMDB_API_KEY);
        var data = await resp.json();
        if (data && !data.status_code) {
            tmdbCache[cacheKey] = data;
            return data;
        }
        return null;
    } catch (e) {
        return null;
    }
}

async function ensureTvMeta(item) {
    if (item.type !== 'series') return;
    var tmdbId = item.tmdbId || item._tmdbId;
    if (!tmdbId) return;
    if (tvMetaCache[tmdbId]) return;
    if (!TMDB_API_KEY) {
        tvMetaCache[tmdbId] = { seasonCount: DEFAULT_SEASONS, episodesPerSeason: {} };
        return;
    }
    try {
        var meta = await fetchTMDBMeta(tmdbId, 'tv');
        if (meta && meta.seasons) {
            var validSeasons = meta.seasons.filter(function(s) { return s.season_number > 0 && s.episode_count > 0; });
            var eps = {};
            validSeasons.forEach(function(s) { eps[s.season_number] = s.episode_count; });
            tvMetaCache[tmdbId] = { seasonCount: validSeasons.length, episodesPerSeason: eps };
        }
    } catch(e) {}
}

function getSourceId(item) {
    var source = SOURCES[currentSource];
    if (source.idType === 'tmdb') {
        return item.tmdbId || item._tmdbId || null;
    }
    return item.imdbId;
}

async function enrichFromTMDB() {
    if (!TMDB_API_KEY) return;
    var updated = false;
    for (var i = 0; i < contentData.length; i++) {
        var item = contentData[i];
        var tmdbId = item.tmdbId;
        if (!tmdbId) {
            tmdbId = await resolveImdbToTmdb(item.imdbId);
            if (tmdbId) {
                item._tmdbId = tmdbId;
                updated = true;
            }
        }
        if (tmdbId) {
            var meta = await fetchTMDBMeta(tmdbId, item.type);
            if (meta && meta.overview) {
                item.desc = meta.overview;
                if (meta.vote_average) item.rating = meta.vote_average.toFixed(1);
                if (meta.poster_path) item.poster = TMDB_IMG_BASE + meta.poster_path;
                updated = true;
            }
        }
        await new Promise(function(r) { setTimeout(r, 250); });
    }
    if (updated) {
        Object.keys(rowCache).forEach(function(key) { delete rowCache[key]; });
        ROW_CONFIG.forEach(function(cfg) { renderRow(cfg.id); });
    }
}

const ROW_CONFIG = [
    { id: 'trending', title: 'Trending Now', type: null },
    { id: 'new', title: 'New Releases', type: null, filter: function(item) { return item.year >= 2022; } },
    { id: 'toprated', title: 'Top Rated', type: null, filter: function(item) { return parseFloat(item.rating) >= 8.2; } },
    { id: 'korean', title: 'K-Dramas & Korean', type: null, filter: function(item) { return item.langs.some(function(l) { return l === 'Korean'; }); } },
    { id: 'movies', title: 'Movies', type: 'movie' },
    { id: 'series', title: 'Web Series', type: 'series' },
    { id: 'classics', title: 'Classics', type: null, filter: function(item) { return item.year < 2000; } },
    { id: 'zombie', title: 'Zombies & Horror', type: null, filter: function(item) { return item.desc.toLowerCase().includes('zombie') || item.desc.toLowerCase().includes('infected') || item.desc.toLowerCase().includes('rage') || item.title === 'I Am Legend'; } }
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
const fsBtn = document.getElementById('fsBtn');
const popBtn = document.getElementById('popBtn');
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
    var source = SOURCES[currentSource];
    var id = getSourceId(item);
    if (!id) {
        embedError.textContent = 'No ID available for this source. Try switching to another source.';
        embedError.classList.remove('hidden');
        return '';
    }
    var base = source.url;
    if (source.hasTypePrefix) {
        var typePath = item.type === 'series' ? 'tv' : 'movie';
        base += typePath + '/' + id;
        if (source.needsEpisode && item.type === 'series') {
            base += '/' + currentSeason + '/' + currentEpisode;
        }
    } else {
        base += id;
    }
    return base;
}

function openWatch(id) {
    var item = contentData.find(function(i) { return i.id === id; });
    if (!item) return;

    currentItem = item;
    currentEpisode = 1;
    currentSeason = 1;
    sourceBtn.textContent = SOURCES[currentSource].name;
    watchMetaTitle.textContent = item.title + ' (' + item.year + ')';
    watchTitle.textContent = 'Now Playing - ' + item.title;
    watchMetaInfo.innerHTML = '<span>' + item.year + '</span><span>' + item.rating + '</span>'
        + '<span style="background:var(--accent-cyan);color:#000;padding:1px 6px;border-radius:2px;font-size:11px;font-weight:700;">' + item.quality + '</span>'
        + '<span style="background:var(--accent-pink);color:#fff;padding:1px 6px;border-radius:2px;font-size:11px;font-weight:700;">' + (item.type === 'movie' ? 'Movie' : 'Series') + '</span>';

    homeView.classList.add('hidden');
    watchView.classList.remove('hidden');
    embedError.textContent = '';
    embedError.classList.add('hidden');
    ensureTvMeta(item).then(function() {
        updateEpisodeVisibility();
        loadPlayer();
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadPlayer() {
    if (!currentItem) return;
    var url = buildEmbedUrl(currentItem);
    if (!url) return;
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

function renderSeasons() {
    var container = document.getElementById('seasonList');
    if (!container) return;
    container.innerHTML = '';
    var max = DEFAULT_SEASONS;
    var meta = currentItem && (currentItem._tvMeta || tvMetaCache[currentItem.tmdbId || currentItem._tmdbId]);
    if (meta && meta.seasonCount) { max = meta.seasonCount; }
    for (var i = 1; i <= max; i++) {
        var btn = document.createElement('button');
        btn.className = 'episode-btn' + (i === currentSeason ? ' active' : '');
        btn.textContent = i;
        btn.dataset.season = i;
        btn.addEventListener('click', function() { selectSeason(parseInt(this.dataset.season)); });
        container.appendChild(btn);
    }
}

function selectSeason(num) {
    currentSeason = num;
    currentEpisode = 1;
    renderSeasons();
    renderEpisodes();
    if (currentItem) { loadPlayer(); }
}

function renderEpisodes() {
    var container = document.getElementById('episodeList');
    if (!container) return;
    container.innerHTML = '';
    var max = DEFAULT_EPISODES;
    var meta = currentItem && (currentItem._tvMeta || tvMetaCache[currentItem.tmdbId || currentItem._tmdbId]);
    if (meta && meta.episodesPerSeason && meta.episodesPerSeason[currentSeason]) {
        max = meta.episodesPerSeason[currentSeason];
    }
    for (var i = 1; i <= max; i++) {
        var btn = document.createElement('button');
        btn.className = 'episode-btn' + (i === currentEpisode ? ' active' : '');
        btn.textContent = i;
        btn.dataset.episode = i;
        btn.addEventListener('click', function() { selectEpisode(parseInt(this.dataset.episode)); });
        container.appendChild(btn);
    }
}

function selectEpisode(num) {
    currentEpisode = num;
    renderEpisodes();
    if (currentItem) { loadPlayer(); }
}

function updateEpisodeVisibility() {
    var el = document.getElementById('episodeSelector');
    if (!el) return;
    var isSeries = currentItem && currentItem.type === 'series';
    if (isSeries) {
        el.classList.remove('hidden');
        renderSeasons();
        renderEpisodes();
    } else {
        el.classList.add('hidden');
    }
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
videoFrame.addEventListener('error', function() { embedLoader.classList.add('hidden'); embedError.textContent = 'Failed to load video from ' + SOURCES[currentSource].name + '. Try another source.'; embedError.classList.remove('hidden'); });
backBtn.addEventListener('click', goHome);
fsBtn.addEventListener('click', function() {
    var wrap = document.querySelector('.watch-player-wrap');
    var iframe = document.getElementById('videoFrame');
    function doExit() {
        if (document.exitFullscreen) { document.exitFullscreen().catch(function(){}); }
        else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
        else if (document.mozCancelFullScreen) { document.mozCancelFullScreen(); }
    }
    var el = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
    if (el) { doExit(); return; }
    var target = wrap || document.documentElement;
    if (target.requestFullscreen) {
        target.requestFullscreen().catch(function(err) { console.warn('Fullscreen blocked:', err.message); });
    } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen();
    } else if (target.mozRequestFullScreen) {
        target.mozRequestFullScreen();
    } else if (iframe && iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    }
});

popBtn.addEventListener('click', function() {
    if (currentItem) {
        var url = buildEmbedUrl(currentItem);
        if (url) window.open(url, '_blank');
    }
});

sourceBtn.addEventListener('click', function() {
    currentSource = (currentSource + 1) % SOURCES.length;
    sourceBtn.textContent = SOURCES[currentSource].name;
    if (currentItem) {
        updateEpisodeVisibility();
        var url = buildEmbedUrl(currentItem);
        if (!url) return;
        embedLoader.classList.remove('hidden');
        embedError.textContent = '';
        embedError.classList.add('hidden');
        videoFrame.src = url;
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
enrichFromTMDB();

var resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        ROW_CONFIG.forEach(function(cfg) { fillRow(cfg.id); });
    }, 300);
});


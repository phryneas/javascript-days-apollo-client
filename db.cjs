module.exports = {
  breeds: [
    { id: 1, name: "Labrador Retriever", origin: "Canada" },
    { id: 2, name: "Bulldog", origin: "England" },
    { id: 3, name: "Beagle", origin: "England" },
    { id: 4, name: "Poodle", origin: "Germany" },
    { id: 5, name: "Rottweiler", origin: "Germany" },
    { id: 6, name: "Shiba Inu", origin: "Japan" },
    { id: 7, name: "Pug", origin: "China" },
  ],
  dogs: [
    {
      id: 1,
      name: "Buddy",
      breed_id: 1,
      image_id: 11,
    },
    {
      id: 2,
      name: "Charlie",
      breed_id: 1,
      image_id: 12,
    },
    {
      id: 3,
      name: "Max",
      breed_id: 2,
      image_id: 13,
    },
    {
      id: 4,
      name: "Cooper",
      breed_id: 5,
      image_id: 14,
    },
    {
      id: 5,
      name: "Rocky",
      breed_id: 7,
      image_id: 15,
    },
    {
      id: 6,
      name: "Taro",
      breed_id: 6,
      image_id: 16,
    },
    {
      id: 7,
      name: "Bear",
      breed_id: 5,
      image_id: 17,
    },
    {
      id: 8,
      name: "Tucker",
      breed_id: 4,
      image_id: 18,
    },
    {
      id: 9,
      name: "Ramona",
      breed_id: 3,
      image_id: 19,
    },
  ],
  images: [
    {
      id: 11,
      src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg",
      attribution:
        "https://pixabay.com/es/users/chiemsee2016-1892688/, CC0, via Wikimedia Commons",
    },
    {
      id: 12,
      src: "https://upload.wikimedia.org/wikipedia/commons/3/35/Portrait_of_a_labrador_retriever.jpg",
      attribution: "Dktue, CC0, via Wikimedia Commons",
    },
    {
      id: 13,
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Warrior_American_Bulldog_puppy.jpg",
      attribution:
        "Atsme, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    },
    {
      id: 14,
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Rottweiler_in_Sylhet_01.jpg",
      attribution:
        "Fabian Roudra Baroi, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    },
    {
      id: 15,
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pug_on_chair.jpg",
      attribution:
        "NMorales (WMF), CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    },
    {
      id: 16,
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Taro_the_Shiba_Inu_heads_out_for_a_hike.jpg",
      attribution:
        "Taro the Shiba Inu, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons",
    },
    {
      id: 17,
      src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Rottweiler_puppy_-21603071920.jpg",
      attribution: "Vlaaitje, CC0, via Wikimedia Commons",
    },
    {
      id: 18,
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Poodle-1561405_1280.jpg",
      attribution:
        "Misty721, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    },
    {
      id: 19,
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Beagle_ramona.jpg",
      attribution:
        "Josephmore, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    },
  ],
};

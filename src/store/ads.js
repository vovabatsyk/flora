export default {
  state: {
    ads: [
      {
        title: 'Суниця Сан Андреас',
        description:
          'Популярний ремонтантний сорт, може плодоносити до 7 разів за сезон. Вирізняється високою якістю плодів, високими смаковими показниками та чудовим зовнішнім виглядом. Ягоди конічної форми, масою 25-30 г (до 50 г). М’якуш щільний, червоно-помаранчевий, приємний на смак, солодкий з легкою кислинкою. Сорт стійкий до хвороб. Майже не утворює вусів.',
        promo: true,
        avalable: true,
        id: 'asdsa',
        country: 'Ukraine',
        price: '100uah',
        url:
          'https://images.wallpaperscraft.ru/image/klubnika_yagody_krupnyj_planom_113099_1920x1080.jpg',
      },
      {
        url: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        title: 'Title 2',
        description: 'Descriptions',
        avalable: false,
        country: 'Ukraine',
        price: '100uah',
        promo: true,
        id: 'ertrrt',
      },
      {
        title: 'Title 3',
        description: 'Descriptions',
        promo: false,
        avalable: true,
        price: '100uah',
        country: 'Ukraine',
        id: 'snkfs',
        url: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        title: 'Title 4',
        description: 'Descriptions',
        promo: true,
        avalable: true,
        country: 'Ukraine',
        price: '100uah',
        id: 'njjndgrkj',
        url: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
      {
        title: 'Title 5',
        description: 'Descriptions',
        promo: false,
        country: 'Ukraine',
        avalable: true,
        price: '100uah',
        id: '555',
        url: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        url: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        title: 'Title 6',
        description: 'Descriptions',
        country: 'Ukraine',
        promo: false,
        avalable: false,
        id: '666',
        price: '100uah',
      },
    ],
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    },
  },
  actions: {
    createAd({ commit }, payload) {
      payload.id = 'qqwqweqweqw'

      commit('createAd', payload)
    },
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds(state) {
      return state.ads
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    },
  },
}

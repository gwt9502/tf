import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.tbGood.getDataList);
  router.get('/search', controller.tbGood.searchGoodList);

  router.get('/jd/getDataList', controller.jdGood.getDataList)

  // 淘票票
  router.get('/tpp/getHotAndShowFilms', controller.tppGood.getHotAndShowFilms)
};

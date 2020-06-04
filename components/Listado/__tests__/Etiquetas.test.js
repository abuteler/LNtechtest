import { articles } from '../../../jest/__mocks__/articlesResponseMock';
import { getTagsMap } from '../../../utils/tags.js';
import Etiquetas from '../Etiquetas';

describe('Tests de componente Etiquetas', () => {
  test('se renderizan un maximo de 10 etiquetas', () => {
    const tagsMap = getTagsMap(articles);
    const component = shallow(<Etiquetas tags={tagsMap} />);
    expect(tagsMap.length).toBe(11);
    expect(component).toContainMatchingElements(10, 'li');
  });

});

// React, shallow, mount y render estan definidas como globals via jest-environment-enzyme

import PreviewArticulo from '../PreviewArticulo';

describe('Tests de componente PreviewArticulo', () => {
  test('Basic text match', () => {
    const component = shallow(<PreviewArticulo />);
    
    expect(component).toHaveText('Preview de Articulo X');
  });

});

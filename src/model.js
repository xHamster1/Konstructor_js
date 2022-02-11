import image from './img/image.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock('here we go wtih some text', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1 rem',
            'font-weight': 'bold'
        },
    }),
    new ColumnsBlock([
        '11111111',
        '22222222',
        '33333333'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#ffff',
            'font-weight': 'bold'
        } 
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'fles',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        }, 
    }),
]
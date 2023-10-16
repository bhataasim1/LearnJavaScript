const boxColor = document.querySelector('.box');
const heading = document.querySelector('.heading');
const button = document.querySelector('.button');
const text = document.querySelector('.text');

const Colors = [
    'red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'brown',
    'teal', 'cyan', 'magenta', 'violet', 'maroon', 'turquoise', 'indigo',
    'lime', 'lavender', 'olive', 'peach', 'gold', 'silver', 'white',
    'navy', 'sapphire', 'ruby', 'emerald', 'coral', 'amber', 'ivory', 'charcoal',
    'beige', 'khaki', 'salmon', 'sky blue', 'plum', 'crimson', 'periwinkle',
    'chartreuse', 'aubergine', 'tangerine', 'fuchsia', 'lavender', 'pearl',
    'champagne', 'indigo', 'slate', 'mustard', 'orchid', 'cerulean', 'scarlet',
    'turquoise', 'copper', 'mahogany', 'saffron', 'pumpkin', 'rose', 'mahogany',
    'topaz', 'jade', 'denim', 'lilac', 'pewter', 'sienna', 'ruby', 'cocoa',
    'sand', 'taupe', 'walnut', 'sage', 'olive', 'ash', 'stone', 'platinum',
    'bronze', 'pear', 'berry', 'amethyst', 'avocado', 'cinnabar', 'sepia',
    'auburn', 'cobalt', 'firebrick', 'steel', 'ocean', 'lemon', 'apricot',
    'moss', 'swan', 'almond', 'dandelion', 'celadon', 'jungle', 'malachite',
    'sapphire', 'peacock', 'marigold', 'chocolate', 'butter', 'ecru', 'rosewood',
    'lagoon', 'bisque', 'cranberry', 'oyster', 'hazelnut', 'pine', 'smoke',
    'silver', 'sandstone', 'tawny', 'umber', 'quartz', 'burgundy', 'copper',
    'charcoal', 'titanium', 'vermilion', 'pomegranate', 'olive green', 'mango',
    'wisteria', 'peridot', 'linen', 'dove', 'amber', 'royal blue', 'pearl',
    'caramel', 'coffee', 'sunflower', 'clay', 'pumpkin', 'heather', 'sage',
    'alabaster', 'beet', 'cayenne', 'lavender gray', 'midnight blue', 'pink'
];


button.addEventListener('click', function () {
    Colors.forEach(() => {
        const randomColor = Math.floor(Math.random() * Colors.length);
        boxColor.style.backgroundColor = Colors[randomColor];
        heading.style.color = Colors[randomColor];
    })
    text.innerText = `Box Color : ${boxColor.style.backgroundColor}`
})


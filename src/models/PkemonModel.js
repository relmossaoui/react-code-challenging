
export default function(data) {
    let { sprites, weight, name, height, base_experience, abilities } = data

    return {
        name,

        imgList : Object.values(sprites).filter(url => url),

        details : [
            {   
                text : 'Weight',
                value : weight       
            },

            {   
                text : 'Height',
                value : height       
            },

            {
                text : 'Base Experience',
                value: base_experience
            },

            {
                text : 'Abilities',
                value: abilities.map(({ ability }) => ability.name).join(', ')
            }
        ]
    }
}
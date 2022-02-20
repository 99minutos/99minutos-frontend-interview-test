
export const initialState = {
    missions: [
        {
            mission_name: "Mision",
            article_link: "",
            video_link: "",
            description: "esta es la descripcion",
            image: "https://github.com/LEIVAFLORENCIA/99minutos-frontend-interview-test/blob/JR-florencialeiva/wireframe-test.png?raw=true",
            isSelected: false
        }
    ]
}

export const ADD_ARTICLE = 'ADD_ARTICLE';

export function missionReducer(state, action) {

    switch (action.type) {
        case ADD_ARTICLE: {
            console.log('en el case')

            let newMission = {
                mission_name: state.missions.mission_name,
                article_link: state.missions.article_link,
                video_link: state.missions.video_link,
                description: state.missions.description,
                image: state.missions.image,
                isSelected: true
            }
            return {
                missions: [...state.missions, newMission ]

            }
        }

        default:
            console.log('aca')
            return state;
    }
}


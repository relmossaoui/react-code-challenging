import page from '../../components/hoc/page'

import { getPokemonPage } from '../../http.js'

export default page({ fetchData : getPokemonPage });


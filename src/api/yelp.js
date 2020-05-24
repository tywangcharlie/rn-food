import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer usKUPK7hdp_CILrGDPCVyEtNYGe_8XTFV_ABdSygT7ecyKlWlYGm9xUdjwbsy9m8O0SVbiyEthikP-s7LTId6Hlcsfbw-e2Op7vSVe9vTBb2ZUsu0mzvri57ru7JXnYx'
    }
});


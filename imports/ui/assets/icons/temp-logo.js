import generateIcon from './generateIcon';

const  template = function () {
	return `
	<svg viewBox="175 188 200 20">
	    <path d="M358.661435,207.722026 L358.661435,188 L361.191875,188 L361.191875,196.595793 L372.455508,196.595793 L372.455508,188 L375,188 L375,207.722026 L372.455508,207.722026 L372.455508,199.126233 L361.191875,199.126233 L361.191875,207.722026 L358.661435,207.722026 Z M340.110947,203.018697 L342.339005,201.835709 C342.604435,202.927098 343.065556,203.759301 343.721326,204.331799 C344.376576,204.904817 345.259263,205.191586 346.368868,205.191586 C347.386353,205.191586 348.193054,204.946453 348.788972,204.455667 C349.385411,203.9654 349.683109,203.261749 349.683109,202.344711 C349.683109,201.822177 349.584744,201.386558 349.387492,201.037855 C349.190241,200.689672 348.928974,200.391453 348.603691,200.143718 C348.277888,199.896503 347.906805,199.699772 347.489402,199.553004 C347.071999,199.405716 346.638983,199.254785 346.189832,199.09917 C345.548115,198.887866 344.880894,198.647417 344.188693,198.376782 C343.496491,198.106146 342.863621,197.755882 342.291123,197.324427 C341.717584,196.893492 341.247616,196.352742 340.881217,195.701656 C340.514298,195.05057 340.331099,194.257921 340.331099,193.322668 C340.331099,192.479014 340.491398,191.725399 340.812517,191.060261 C341.133116,190.395643 341.566133,189.838759 342.112087,189.389088 C342.657521,188.939937 343.290392,188.596439 344.010177,188.357551 C344.729443,188.119704 345.484099,188 346.272064,188 C347.830819,188 349.147043,188.424689 350.219176,189.272506 C351.292349,190.120844 352.043882,191.273646 352.474817,192.730913 L350.082297,193.694271 C349.779914,192.56645 349.300577,191.759228 348.644807,191.273646 C347.989037,190.787543 347.179733,190.544492 346.217416,190.544492 C345.107812,190.544492 344.273526,190.81773 343.71404,191.362643 C343.155074,191.908078 342.875591,192.575298 342.875591,193.363783 C342.875591,193.849886 342.973436,194.255839 343.171208,194.581122 C343.367939,194.906404 343.639095,195.193174 343.982593,195.440389 C344.326613,195.688124 344.738811,195.90151 345.220229,196.080025 C345.701648,196.25906 346.212732,196.439657 346.754003,196.623377 C347.524273,196.889849 348.243538,197.16673 348.91336,197.45506 C349.582142,197.743911 350.159844,198.099901 350.645947,198.520947 C351.131529,198.943034 351.516664,199.454118 351.800831,200.05472 C352.084998,200.655323 352.227602,201.391242 352.227602,202.261959 C352.227602,203.197212 352.066782,204.008598 351.746183,204.696636 C351.425064,205.384154 350.996211,205.953008 350.460145,206.401638 C349.924079,206.850789 349.304741,207.183358 348.603691,207.398825 C347.902121,207.614293 347.166201,207.722026 346.396452,207.722026 C345.791166,207.722026 345.169746,207.64604 344.532712,207.495109 C343.895157,207.343657 343.290392,207.089156 342.717373,206.732126 C342.144355,206.374054 341.628066,205.890554 341.170068,205.281104 C340.71155,204.671134 340.358683,203.916998 340.110947,203.018697 L340.110947,203.018697 Z M320.886994,201.725893 L330.748007,201.725893 L325.810475,191.080558 L320.886994,201.725893 Z M315.303059,207.722026 L324.490607,188 L327.144394,188 L336.31789,207.722026 L333.539714,207.722026 L331.930996,204.256333 L319.704006,204.256333 L318.095287,207.722026 L315.303059,207.722026 Z M299.063901,207.722026 L299.063901,188 L301.594862,188 L301.594862,205.191586 L311.373123,205.191586 L311.373123,207.722026 L299.063901,207.722026 Z M282.026369,198.768682 L286.510067,198.768682 C287.069033,198.768682 287.603017,198.665633 288.11202,198.459534 C288.621022,198.253434 289.059243,197.966665 289.426162,197.599746 C289.79204,197.233347 290.083494,196.802413 290.298961,196.306942 C290.513908,195.811992 290.622682,195.261873 290.622682,194.656587 C290.622682,194.051301 290.513908,193.501703 290.298961,193.006753 C290.083494,192.510762 289.79204,192.080347 289.426162,191.713428 C289.059243,191.34703 288.621022,191.060261 288.11202,190.854161 C287.603017,190.647542 287.069033,190.544492 286.510067,190.544492 L282.026369,190.544492 L282.026369,198.768682 Z M279.495929,207.722026 L279.495929,188 L286.510067,188 C287.463536,188 288.343621,188.170188 289.150322,188.509003 C289.957544,188.848338 290.655991,189.313622 291.247746,189.905377 C291.83898,190.49609 292.304785,191.195578 292.643079,192.00228 C292.982934,192.809501 293.152602,193.694271 293.152602,194.656587 C293.152602,195.610577 292.982934,196.495346 292.643079,197.310895 C292.304785,198.126964 291.83898,198.830616 291.247746,199.422371 C290.655991,200.013084 289.957544,200.474205 289.150322,200.804172 C288.343621,201.134659 287.463536,201.299122 286.510067,201.299122 L282.026369,201.299122 L282.026369,207.722026 L279.495929,207.722026 Z M260.945961,203.018697 L263.174018,201.835709 C263.43997,202.927098 263.90057,203.759301 264.55634,204.331799 C265.21159,204.904817 266.094277,205.191586 267.203362,205.191586 C268.221367,205.191586 269.028068,204.946453 269.623986,204.455667 C270.219904,203.9654 270.518123,203.261749 270.518123,202.344711 C270.518123,201.822177 270.419237,201.386558 270.222506,201.037855 C270.024735,200.689672 269.763467,200.391453 269.438185,200.143718 C269.112902,199.896503 268.741819,199.699772 268.324416,199.553004 C267.907013,199.405716 267.473997,199.254785 267.024846,199.09917 C266.382608,198.887866 265.715908,198.647417 265.023707,198.376782 C264.330984,198.106146 263.698635,197.755882 263.126137,197.324427 C262.552598,196.893492 262.08263,196.352742 261.716231,195.701656 C261.349312,195.05057 261.166113,194.257921 261.166113,193.322668 C261.166113,192.479014 261.325892,191.725399 261.647531,191.060261 C261.96813,190.395643 262.401147,189.838759 262.947101,189.389088 C263.492535,188.939937 264.124885,188.596439 264.844671,188.357551 C265.564457,188.119704 266.318592,188 267.107078,188 C268.665833,188 269.981537,188.424689 271.05419,189.272506 C272.126842,190.120844 272.878896,191.273646 273.309831,192.730913 L270.91679,193.694271 C270.614407,192.56645 270.13507,191.759228 269.479821,191.273646 C268.824051,190.787543 268.015267,190.544492 267.05191,190.544492 C265.942826,190.544492 265.10854,190.81773 264.549054,191.362643 C263.990088,191.908078 263.710605,192.575298 263.710605,193.363783 C263.710605,193.849886 263.808971,194.255839 264.005702,194.581122 C264.202953,194.906404 264.473588,195.193174 264.817607,195.440389 C265.161106,195.688124 265.573825,195.90151 266.055243,196.080025 C266.536662,196.25906 267.047746,196.439657 267.588496,196.623377 C268.358766,196.889849 269.078552,197.16673 269.747854,197.45506 C270.417156,197.743911 270.994858,198.099901 271.480961,198.520947 C271.966543,198.943034 272.351678,199.454118 272.635845,200.05472 C272.920012,200.655323 273.062095,201.391242 273.062095,202.261959 C273.062095,203.197212 272.901796,204.008598 272.580677,204.696636 C272.260078,205.384154 271.831746,205.953008 271.295159,206.401638 C270.758573,206.850789 270.139755,207.183358 269.438185,207.398825 C268.737135,207.614293 268.001215,207.722026 267.230946,207.722026 C266.62618,207.722026 266.00476,207.64604 265.367726,207.495109 C264.730171,207.343657 264.124885,207.089156 263.551867,206.732126 C262.978849,206.374054 262.463601,205.890554 262.005082,205.281104 C261.546043,204.671134 261.193697,203.916998 260.945961,203.018697 L260.945961,203.018697 Z M245.03625,198.768682 L249.519948,198.768682 C250.078914,198.768682 250.613418,198.665633 251.122421,198.459534 C251.630903,198.253434 252.068603,197.966665 252.435522,197.599746 C252.802441,197.233347 253.093374,196.802413 253.308842,196.306942 C253.524309,195.811992 253.632043,195.261873 253.632043,194.656587 C253.632043,194.051301 253.524309,193.501703 253.308842,193.006753 C253.093374,192.510762 252.802441,192.080347 252.435522,191.713428 C252.068603,191.34703 251.630903,191.060261 251.122421,190.854161 C250.613418,190.647542 250.078914,190.544492 249.519948,190.544492 L245.03625,190.544492 L245.03625,198.768682 Z M242.50581,207.722026 L242.50581,188 L249.519948,188 C250.473417,188 251.353502,188.170188 252.160724,188.509003 C252.966904,188.848338 253.666393,189.313622 254.257627,189.905377 C254.849381,190.49609 255.314666,191.195578 255.654001,192.00228 C255.992815,192.809501 256.162483,193.694271 256.162483,194.656587 C256.162483,195.610577 255.992815,196.495346 255.654001,197.310895 C255.314666,198.126964 254.849381,198.830616 254.257627,199.422371 C253.666393,200.013084 252.966904,200.474205 252.160724,200.804172 C251.353502,201.134659 250.473417,201.299122 249.519948,201.299122 L245.03625,201.299122 L245.03625,207.722026 L242.50581,207.722026 Z M219.128645,197.861013 C219.128645,198.91545 219.311845,199.891819 219.678764,200.79064 C220.045162,201.688941 220.552083,202.463374 221.198485,203.114461 C221.844887,203.765547 222.61932,204.274549 223.522826,204.641468 C224.425811,205.007867 225.400098,205.191586 226.445166,205.191586 C227.499603,205.191586 228.475972,205.007867 229.374273,204.641468 C230.273094,204.274549 231.047528,203.765547 231.698614,203.114461 C232.3497,202.463374 232.858702,201.688941 233.225621,200.79064 C233.59202,199.891819 233.775219,198.91545 233.775219,197.861013 C233.775219,196.806576 233.59202,195.830208 233.225621,194.931907 C232.858702,194.033085 232.3497,193.260734 231.698614,192.614332 C231.047528,191.96793 230.273094,191.461529 229.374273,191.09461 C228.475972,190.728212 227.499603,190.544492 226.445166,190.544492 C225.39073,190.544492 224.414361,190.728212 223.51606,191.09461 C222.617238,191.461529 221.844887,191.96793 221.198485,192.614332 C220.552083,193.260734 220.045162,194.035687 219.678764,194.938672 C219.311845,195.841658 219.128645,196.815945 219.128645,197.861013 L219.128645,197.861013 Z M216.584153,197.861013 C216.584153,196.449546 216.83397,195.14269 217.334125,193.941486 C217.83376,192.740802 218.523359,191.699897 219.403444,190.819291 C220.28405,189.939206 221.327037,189.249606 222.532405,188.749972 C223.737773,188.250338 225.042547,188 226.445166,188 C227.857154,188 229.168174,188.250338 230.378746,188.749972 C231.588798,189.249606 232.629183,189.939206 233.50042,190.819291 C234.371137,191.699897 235.056573,192.742883 235.556728,193.948251 C236.056362,195.15414 236.30618,196.457873 236.30618,197.861013 C236.30618,199.273521 236.056362,200.579336 235.556728,201.780541 C235.056573,202.982266 234.371137,204.02265 233.50042,204.902735 C232.629183,205.78282 231.588798,206.47294 230.378746,206.972575 C229.168174,207.47273 227.857154,207.722026 226.445166,207.722026 C225.033179,207.722026 223.726323,207.47273 222.525639,206.972575 C221.324434,206.47294 220.28405,205.78282 219.403444,204.902735 C218.523359,204.02265 217.83376,202.982266 217.334125,201.780541 C216.83397,200.579336 216.584153,199.273521 216.584153,197.861013 L216.584153,197.861013 Z M200.31637,197.641382 L205.226319,197.641382 C206.372355,197.641382 207.282627,197.308813 207.956612,196.644195 C208.630078,195.979577 208.967331,195.129158 208.967331,194.092937 C208.967331,193.056716 208.627996,192.206297 207.949326,191.541679 C207.271177,190.877061 206.363507,190.544492 205.226319,190.544492 L200.31637,190.544492 L200.31637,197.641382 Z M197.78593,207.722026 L197.78593,188 L205.226319,188 C206.161572,188 207.014593,188.156136 207.784343,188.467887 C208.554612,188.779638 209.216628,189.203807 209.771951,189.739873 C210.326233,190.275939 210.753004,190.920779 211.050702,191.672313 C211.348922,192.423846 211.497771,193.231068 211.497771,194.092937 C211.497771,194.844991 211.385353,195.543959 211.161038,196.190361 C210.936203,196.836763 210.617686,197.418629 210.204967,197.936479 C209.792248,198.454849 209.294696,198.890468 208.71283,199.243335 C208.130444,199.596722 207.472592,199.850703 206.739274,200.006839 L212.089005,207.722026 L208.857516,207.722026 L203.782584,200.171302 L200.31637,200.171302 L200.31637,207.722026 L197.78593,207.722026 Z M177.53044,205.191586 L181.752871,205.191586 C182.806787,205.191586 183.781074,205.012551 184.675212,204.655 C185.569349,204.297449 186.339098,203.795733 186.986021,203.149331 C187.631902,202.502929 188.138302,201.727975 188.505742,200.82499 C188.87214,199.922005 189.05586,198.933666 189.05586,197.861013 C189.05586,196.788361 188.87214,195.807308 188.505742,194.917854 C188.138302,194.028401 187.631902,193.260734 186.986021,192.614332 C186.339098,191.96793 185.569349,191.461529 184.675212,191.09461 C183.781074,190.728212 182.806787,190.544492 181.752871,190.544492 L177.53044,190.544492 L177.53044,205.191586 Z M175,207.722026 L175,188 L181.752871,188 C183.146122,188 184.44361,188.250338 185.644815,188.749972 C186.846019,189.249606 187.888485,189.934522 188.773775,190.805759 C189.658544,191.676997 190.348664,192.715299 190.843614,193.920667 C191.338565,195.126556 191.5863,196.439657 191.5863,197.861013 C191.5863,199.291737 191.338565,200.60692 190.843614,201.808125 C190.348664,203.009329 189.658544,204.04555 188.773775,204.916267 C187.888485,205.787504 186.846019,206.47294 185.644815,206.972575 C184.44361,207.47273 183.146122,207.722026 181.752871,207.722026 L175,207.722026 Z" id="Fill-1" stroke="none" fill="#333333" fill-rule="evenodd"></path>
	</svg>
	`;
};

export default generateIcon(template());
new Vue({
    el: '#app',
    data: {
        price:{
            sht:{
                d102: {
                    f: 5346,
                    t: 5940,
                    tr: 2703
                },
                d127: {
                    f: 5433,
                    t: 5940,
                    tr: 3282
                },
                d159: {
                    f: 5956,
                    t: 5940,
                    tr: 3846
                },
                d219: {
                    f: 7350,
                    t: 5940,
                    tr: 5787
                },
                d250: {
                    f: 10560,
                    t: 5940,
                    tr: 6600
                },
                d300: {
                    f: 11880,
                    t: 5940,
                    tr: 7920
                }
            },
            noria:{
                n10:{},
                n25:{},
                n50:{},
                n100:{},
                n200:{}
            },
            sct:{

            },
            stt:{

            }
        },
        params_trans:{
            sht:[
                    [102,1,1.1],
                    [102,2,1.1],
                    [102,3,1.5],
                    [102,4,1.5],
                    [102,5,1.5],
                    [102,6,1.5],
                    [102,7,2.2],
                    [102,8,2.2],
                    [102,9,2.2],
                    [102,10," Невідомо "],
                    [102,11," Невідомо "],
                    [102,12," Невідомо "],
                    [102,13," Невідомо "],
                    [102,14," Невідомо "],
                    [102,15," Невідомо "],
                    [102,16," Невідомо "],
                    [102,17," Невідомо "],
                    [102,18," Невідомо "],
                    [102,19," Невідомо "],
                    [102,20," Невідомо "],
                
                    [127,1,1.5],
                    [127,2,1.5],
                    [127,3,1.5],
                    [127,4,1.5],
                    [127,5,2.2],
                    [127,6,2.2],
                    [127,7,2.2],
                    [127,8,2.2],
                    [127,9,3],
                    [127,10,3],
                    [127,11," Невідомо "],
                    [127,12," Невідомо "],
                    [127,13," Невідомо "],
                    [127,14," Невідомо "],
                    [127,15," Невідомо "],
                    [127,16," Невідомо "],
                    [127,17," Невідомо "],
                    [127,18," Невідомо "],
                    [127,19," Невідомо "],
                    [127,20," Невідомо "],
                    
                    [159,1,2.2],
                    [159,2,2.2],
                    [159,3,2.2],
                    [159,4,2.2],
                    [159,5,3],
                    [159,6,3],
                    [159,7,3],
                    [159,8,3],
                    [159,9,4],
                    [159,10,4],
                    [159,11,4],
                    [159,12,4],
                    [159,13," Невідомо "],
                    [159,14," Невідомо "],
                    [159,15," Невідомо "],
                    [159,16," Невідомо "],
                    [159,17," Невідомо "],
                    [159,18," Невідомо "],
                    [159,19," Невідомо "],
                    [159,20," Невідомо "],
                    
                    [219,1,3],
                    [219,2,3],
                    [219,3,3],
                    [219,4,3],
                    [219,5,4],
                    [219,6,4],
                    [219,7,4],
                    [219,8,4],
                    [219,9,4],
                    [219,10,4],
                    [219,11,5.5],
                    [219,12,5.5],
                    [219,13," Невідомо "],
                    [219,14," Невідомо "],
                    [219,15," Невідомо "],
                    [219,16," Невідомо "],
                    [219,17," Невідомо "],
                    [219,18," Невідомо "],
                    [219,19," Невідомо "],
                    [219,20," Невідомо "],
                    
                    
                    [250,1,2.2],
                    [250,2,2.2],
                    [250,3,2.2],
                    [250,4,2.2],
                    [250,5,3],
                    [250,6,3],
                    [250,7,4],
                    [250,8,4],
                    [250,11,4],
                    [250,10,4],
                    [250,11,5.5],
                    [250,12,5.5],
                    [250,13," Невідомо "],
                    [250,14," Невідомо "],
                    [250,15," Невідомо "],
                    [250,16," Невідомо "],
                    [250,17," Невідомо "],
                    [250,18," Невідомо "],
                    [250,19," Невідомо "],
                    [250,20," Невідомо "],
                    
                    [300,1,3],
                    [300,2,3],
                    [300,3,4],
                    [300,4,4],
                    [300,5,4],
                    [300,6,4],
                    [300,7,5.5],
                    [300,8,5.5],
                    [300,9,5.5],
                    [300,10,5.5],
                    [300,11,7.5],
                    [300,12,7.5],
                    [300,13," Невідомо "],
                    [300,14," Невідомо "],
                    [300,15," Невідомо "],
                    [300,16," Невідомо "],
                    [300,17," Невідомо "],
                    [300,18," Невідомо "],
                    [300,19," Невідомо "],
                    [300,20," Невідомо "],
              ],
            noria:{
                n10:{},
                n25:{},
                n50:{},
                n100:{},
                n200:{}
            },
            sct:{

            },
            stt:{

            }
        },
        engyne: {
            i1: {},
            i2: {},
            i3: {},
            i4: {},
            i5: {},
            i6: {},
            i7: {},
            i8: {},
            i9: {},
            i10: {},
            i11: {},
            i12: {},
            i13: {},
            i14: {},
            i15: {},
            i16: {},
            i17: {},
            i18: {},
            i19: {},
            i20: {},
            i21: {}
        },
        m_engyne: {
            i1: {},
            i2: {},
            i3: {},
            i4: {},
            i5: {},
            i6: {},
            i7: {},
            i8: {},
            i9: {},
            i10: {},
            i11: {},
            i12: {},
            i13: {},
            i14: {},
            i15: {},
            i16: {},
            i17: {},
            i18: {},
            i19: {},
            i20: {},
            i21: {},
            i22: {},
            i23: {},
            i24: {},
            i25: {},
            i26: {},
            i27: {},
            i28: {},
            i29: {},
            i30: {},
            i31: {},
            i32: {},
            i33: {},
            i34: {},
            i35: {},
            i36: {},
            i37: {},
            i38: {},
            i39: {},
            i40: {},
            i41: {}
        },


        
        res: 0,
        res_with_out_patrts: 0,
        d_transporter: null,
        l_trans: null,
        t_boonker: 0,
        t_stend: 0,
        t_krot: 0,
        t_zholob: 0,

        
    },
    methods:{
        calculate_sht: function(){
            switch (this.d_transporter) {
                case "102":
                    this.res_with_out_patrts = this.price.sht.d102.f + this.price.sht.d102.t + (this.price.sht.d102.tr * parseInt(this.l_trans))
                    this.res  = this.res_with_out_patrts 
                    break;
                case "127":
                    this.res_with_out_patrts = this.price.sht.d127.f + this.price.sht.d127.t + (this.price.sht.d127.tr * parseInt(this.l_trans))
                    this.res  = this.res_with_out_patrts 
                    break;
                case "159":
                    this.res_with_out_patrts = this.price.sht.d159.f + this.price.sht.d159.t + (this.price.sht.d159.tr * parseInt(this.l_trans))
                    this.res  = this.res_with_out_patrts 
                    break;
                case "219":
                    this.res_with_out_patrts = this.price.sht.d219.f + this.price.sht.d219.t + (this.price.sht.d219.tr * parseInt(this.l_trans))
                    this.res  = this.res_with_out_patrts 
                break;
                case "250":
                    this.res_with_out_patrts = this.price.sht.d250.f + this.price.sht.d250.t + (this.price.sht.d250.tr * parseInt(this.l_trans))
                    this.res  = this.res_with_out_patrts 
                break;
                case "300":
                    this.res_with_out_patrts = this.price.sht.d300.f + this.price.sht.d300.t + (this.price.sht.d300.tr * parseInt(this.l_trans))
                    this.res  = this.res_with_out_patrts 
                break;
            }

            // Додати ціну бункера
            if (this.radio_boonker == true )
    do {
	            this.d_transporter < 160 ? this.t_boonker = 3000 : (this.d_transporter < 299 ? this.t_boonker = 4000 : this.t_boonker = 6000);
	                this.res += t_boonker;
} while (condition);
            end

            if (this.radio_boonker == false )
                this.t_boonker = 0;
            end
            
            // Додати ціну підставки
            if (this.radio_stend)
                this.d_transporter < 160 ? this.t_stend = 4000 : (this.d_transporter < 299 ? this.t_stend = 5000 : this.t_stend = 7000)
                this.res += t_stend  
            end
            

            // Додати ціну Крота
            if (this.radio_krot)
                this.t_krot = this.res_with_out_patrts * 0.3
                this.res += t_stend
            end
            

            // Додати ціну жолоба
            if (this.radio_zholob)

                switch (this.d_transporter) {
                    case "102":
                        this.t_zholob = (this.price.sht.d102.tr * parseInt(this.l_trans)) * 0.2
                        this.res  += t_zholob 
                        break;
                    case "127":
                        this.t_zholob = (this.price.sht.d127.tr * parseInt(this.l_trans)) * 0.2
                        this.res  += t_zholob
                        break;
                    case "159":
                        this.t_zholob = (this.price.sht.d159.tr * parseInt(this.l_trans)) * 0.2
                        this.res  += t_zholob
                        break;
                    case "219":
                        this.t_zholob = (this.price.sht.d219.tr * parseInt(this.l_trans)) * 0.2
                        this.res  += t_zholob
                        break;
                    case "250":
                        this.t_zholob = (this.price.sht.d250.tr * parseInt(this.l_trans)) * 0.2
                        this.res  += t_zholob
                        break;
                    case "300":
                        this.t_zholob = (this.price.sht.d300.tr * parseInt(this.l_trans)) * 0.2
                        this.res  += t_zholob
                        break;
                }
            end
        }
        
    },
});
   
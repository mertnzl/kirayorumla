import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import productSite from '../../../assets/productSite';
import { Product, Category } from '../../models';
import Colors from '../../../colors';
const { width, height } = Dimensions.get('window');
import { TextInput, SegmentedButtons } from 'react-native-paper';

const Index = ({ site }: { site: Category }) => {
    const [filtering, setFiltering] = useState<Product[]>([]);
    const [selectedBlok, setSelectedBlok] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [value, setValue] = useState<string>('null');

    useEffect(() => {
        setFiltering(productSite);
        return () => {
            setFiltering([]);
        };
    }, []);

    const handleBlokPress = (blok: string) => {
        setSelectedBlok(blok);
    };
    return (
        <View style={{alignItems:'center'}}>

        <View style={{borderRadius:10,borderWidth:1,height:height*0.2,borderColor:'white',alignItems:'center'}}>
        <Text style={{fontWeight:'bold',marginTop:10,color:'#023e8a'}}>{site.name} Blok ve Daire Seçimi</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {filtering.slice(0, site.Blok.length).map((item, index) => (
                
                        <TouchableOpacity
                            onPress={() => handleBlokPress(site.Blok[index])}
                            style={{
                                margin: 5,
                                borderRadius: 25,
                                width: 50,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                borderColor: '#32CBA7',
                                backgroundColor: selectedBlok === site.Blok[index] ? Colors.blue[200] : 'gray',

                            }}>
                            <Text style={{ color: 'white' }} >{site.Blok[index]}</Text>
                        </TouchableOpacity>
                   
                ))}
                
            </View>
            </View>
           
                <View>
                    <TextInput
                        label="Daire No"
                        value={text}
                        onChangeText={text => setText(text)}
                        activeUnderlineColor='#023e8a'
                        underlineColor='#023e8a'
                        style={{ width: width * 0.25, alignSelf: 'center' }}
                        keyboardType='numeric'
                        maxLength={2}
                    />
                </View>
                <SegmentedButtons
                    value={value}
                    onValueChange={setValue}
                    buttons={[
                        {
                            value: 'Kiracı',
                            label: 'Kiracı',
                        },

                        {
                            value: 'Sahibi',
                            label: 'Ev Sahibi'
                        },
                    ]}
                    style={{ width: width * 0.5, alignSelf: 'center',}}
                    labelStyle={{ color: 'red' }}
                />

            </View>
            

        
    );
};

export default Index;
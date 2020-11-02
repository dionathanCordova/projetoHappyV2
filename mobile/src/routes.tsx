import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Header from './components/Header';
import SimpleOnboarding from './pages/Onboarding/onboarding';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanagesDetails';

import InstructionCreate from './pages/IntructionCreate/instruction';

import StepOne from './pages/CreateOrphanage/StepOne';
import StepDois from './pages/CreateOrphanage/StepDois';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Sign from './pages/Sign/index';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#f2f3f5' }

            }}>
                <Screen
                    name="onboarding"
                    component={SimpleOnboarding}
                />

                <Screen
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                />

                <Screen
                    name="OrphanagesDetails"
                    component={OrphanagesDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato" />
                    }}
                />

                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione no mapa" />
                    }}
                />

                <Screen
                    name="InstructionCreate"
                    component={InstructionCreate}
                    options={{
                        headerShown: false
                    }}
                />

                <Screen
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados" />
                    }}
                />

                <Screen
                    name="StepOne"
                    component={StepOne}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados" />
                    }}
                />

                <Screen
                    name="StepDois"
                    component={StepDois}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados" />
                    }}
                />

                <Screen
                    name="Sign"
                    component={Sign}
                    options={{
                        headerShown: false,
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}
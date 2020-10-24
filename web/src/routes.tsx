import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Orphanages from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import EditOrphanage from './pages/EditOrphanage/index';
import Orphanage from './pages/Orphanage';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp/index';
import ForgotPass from './pages/ForgotPass/index';
import DashboardIndex from './pages/Dashboard';
import DashboardNotRegistered from './pages/Dashboard/pendent';

import { AuthProvider} from './contexts';

function Routes() {
   return (
      <BrowserRouter>
         <AuthProvider>
            <Switch>
               <Route path="/" exact component={Landing} />
               <Route path="/orphanages" exact component={Orphanages} />
               <Route path="/orphanages/create" component={CreateOrphanage} />
               <Route path="/orphanages/edit/:id" component={EditOrphanage} />
               <Route path="/orphanages/:id" component={Orphanage} />
               
               <Route path="/signin" component={SignIn} />
               <Route path="/signup" component={SignUp} />
               <Route path="/forgot-pass" component={ForgotPass} />

               <Route path="/dashboard" exact component={DashboardIndex} />
               <Route path="/dashboard/notregistered" component={DashboardNotRegistered} />
            </Switch>
         </AuthProvider>
      </BrowserRouter>
   );
}

export default Routes;
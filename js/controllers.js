app.controller('ctrl',['$scope', '$http','$location', '$window', '$log', function($scope, $http, $location, $window, $log){
    
    //Declaracion de variables 
    $scope.motos= [];
    $scope.fichaMoto ={};

    //Si la comunicacion es exitosa 
    var exito = function (rta){
      //guardo mi objeto en la variable
      $scope.motos = rta.data;
    };

    //Si hay error en la comunicacion
    var error = function (rta){
        //Muestro en consola mensaje de advertencia con status
        $log.warn('Status : ' + rta.status );
        //Muestro en consola menaje de info con el objeto xhr  
        $log.info('Objeto:' + rta);
    };

    //toma de json
    $http.get('js/motos.json').then(exito, error);

    //Funcion Ficha Moto
    $scope.verFicha = function(moto){

      //Evalua si el navegador usa localStorage o sessionStorage
      if($window.localStorage){
        //Limpio Cookie
        localStorage.removeItem('fichaMoto');
        //Seteo Cookie
        localStorage.setItem('fichaMoto', JSON.stringify(moto));
      }else{
        //Limpio Cookie
        sessionStorage.removeItem('fichaMoto');
        //Seteo Cookie
        sessionStorage.setItem('fichaMoto', JSON.stringify(moto));
      }
      //redirecciono a ficha
      $location.path('/ficha');
    }
    
    //Evalua si el navegador usa localStorage o sessionStorage
    if($window.localStorage){
      //Tomo Cookie
      $scope.fichaMoto = JSON.parse(localStorage.getItem('fichaMoto'));
    }else{
      //Tomo Cookie
       $scope.fichaMoto = JSON.parse(sessionStorage.getItem('fichaMoto'));
    }

    //Funcion Volver al Home
    $scope.Volver = function () {
      //Redirecciono a Home
      $location.path('/');
    }

    //Funcion Ampliar imagen
    $scope.ampliarImagen = function (img) {
      //Guardo la imagen recibida en la ruta de la imagen
      $scope.imagenMax = img;
      //Muestro pantalla completa
      $scope.pantallaCompleta = true;
    }
    
    //Funcion ocultar pantalla completa
    $scope.ocultarPantallaCompleta = function(){
      $scope.pantallaCompleta = false;
    }

    //Funcion Ordenar
    $scope.ordenar = function(info){
        $scope.orden = info;      
    }

}])


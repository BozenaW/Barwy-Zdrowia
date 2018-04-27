
var app = angular.module('app',[]);

app.controller('myCtrl', function ($scope, $timeout) {
    $scope.Opt1200={7:43,14:42,21:41,28:40};
    $scope.Opt1500={7:46,14:45,21:44,28:43};
    $scope.Opt2000={7:50,14:49,21:48,28:47};
    $scope.optimal={1200:{7:43,14:42,21:41,28:40},
                    1500:{7:46,14:45,21:44,28:43},
                    2000:{7:50,14:49,21:48,28:47}};
    $scope.sport={2500:{7:55,14:54,21:53,28:52},
                  3000:{7:60,14:59,21:58,28:57},
                  3500:{7:65,14:64,21:63,28:62}};

    $scope.vega={1200:{7:43,14:42,21:41,28:40},
        1500:{7:46,14:45,21:44,28:43},
        2000:{7:50,14:49,21:48,28:47}};
    $scope.jeden={1200:{7:45,14:44,21:43,28:42},
        1500:{7:48,14:47,21:46,28:45},
        2000:{7:52,14:51,21:50,28:49}};
    $scope.dwa={1200:{7:47,14:46,21:45,28:44},
        1500:{7:50,14:49,21:48,28:47},
        2000:{7:54,14:53,21:52,28:51}};

    $scope.currentPlan = $scope.optimal;


    $scope.desc ={'vega' : 'Nasz catering zapewnia zbilansowane posiłki z pominięciem mięsa. Indywidualne menu tworzone jest przede wszystkim w oparciu o produkty roślinne. Wykorzystujemy również produkty mleczne i jaja. Naszym Klientom chcemy udowodnić, że potrawy wegetariańskie są nie tylko zdrowe ale i bardzo smaczne! Każde menu pokrywa zapotrzebowanie organizmu na wszystkie niezbędne składniki pokarmowe, witaminy, a także mikroelementy. Mamy mnóstwo pomysłów, jak zadowolić podniebienie każdego z Klientów, dlatego Twoje dieta z planem Wege jest zróżnicowana, zawsze świeża i tworzona z pasją.',

         'sport' : 'Każdy sportowiec dba o swoje ciało. Częste treningi wymagają spożywania odpowiedniej ilości kalorii zarówno przed, jak i po treningu, a także w dni wolne od niego. Dla rozwoju mięśni znaczenie mają produkty pochodzenia zwierzęcego (wołowina, drób, ryby, jaja, twarogi), ale także duuuża ilość białka roślinnego (warzywa strączkowe, komosa, dziki ryż) oraz dania będące źródłem cennych węglowodanów. Jak wiadomo same ćwiczenia nie przynoszą zamierzonych efektów. Nieodłącznym elementem planu treningowego jest plan żywieniowy dostosowany do indywidualnych potrzeb. Każde menu z Planu Sport przygotowywane jest dla pod okiem dietetyka z uwzględnieniem zapotrzebowania Klienta.',

        'optimal' : 'Głównym celem planu Optimal jest uzyskanie przez naszych Klientów efektów z których będą zadowoleni. Gwarancją sukcesu  jest odpowiednie zmniejszenie dziennej dawki kalorii, przy jednoczesnym zaspokojeniu zapotrzebowania  na wszystkie niezbędne składniki odżywcze, witaminy oraz minerały. Warto zaznaczyć, że zmniejszenie ilości kalorii nie jest równoznaczne ze zmniejszeniem ilości spożywanych w ciągu dnia pokarmów. Plan Optimal dba nie tylko o Twoją sylwetkę i zdrowie, ale także o to, abyś nie odczuł głodu bądź zmęczenia. Nasz catering zapewnia codziennie różnorodne menu konsultowane z dietetykiem, stworzone specjalnie dla Ciebie.'};


    $scope.opt = ['muffiny z ricottą i gorzką czekoladą z sałatką owocową',
        'zielone smoothie z melonem jabłkiem i zieloną herbatą,',
        'wołowina po burgundzku z kluseczkami szpinakowymi',
        'pieczona gruszka z nutellą z awokado',
        'pasztet domowy z zielonej soczewicy z żurawiną, pieczywo razowe i warzywa.'];

        $scope.spt = ['zielony omlet z łososiem wędzonym i warzywami',
                'bliny gryczane z twarożkiem koperkowo-ogórkowym',
                'pieczone piersi z kurczaka z pesto, pomidorami i mozzarellą, kasza bulgur i surówka napoleońska',
                'fit sernik Pinacolada',
                'sałatka z mango, awokado i fetą w sosie miodowo musztardowym z grzanką'];

        $scope.veg = [' bananowe placuszki-serniczki z syropem klonowym',
                    ' sałatka z melonem i selerem naciowym',
                    ' Wege lasagne ze szpinakiem suszonymi pomidorami i sałatką',
                    ' zupa dyniowa z suszonym jabłkiem',
                    'kotleciki z tuńczyka z warzywami'];

    $scope.myDesc = $scope.desc.optimal;
    $scope.currentMenu = $scope.opt;



    $scope.chooseDiet = function (name) {

        switch(name) {
            case 'optimal':
                $('.calories').css('background-color','#ffedb7');
                $('.backY').css('background-color','#ffedb7');
                $('.backR').css('background-color','white');
                $('.backG').css('background-color','white');

                $('.triangle').css('border-left-color','#ffc107');


                $scope.currentPlan = $scope.optimal;
                $scope.myDesc = $scope.desc.optimal;
                $scope.currentMenu = $scope.opt;
                $('.checkboxes').css('display','none');
                break;
            case 'sport':
                $('.calories').css('background-color','#ffd6da');
                $('.backR').css('background-color','#ffd6da');
                $('.backG').css('background-color','white');
                $('.backY').css('background-color','white');
                $('.triangle').css('border-left-color','#dc3545');
                $scope.currentPlan = $scope.sport;
                $scope.myDesc = $scope.desc.sport;
                $scope.currentMenu = $scope.spt;
                $('.checkboxes').css('display','none');
                break;
            case 'vega':
                $('.calories').css('background-color','#d5fcd4');
                $('.backG').css('background-color','#d5fcd4');
                $('.backR').css('background-color','white');
                $('.backY').css('background-color','white');
                $('.triangle').css('border-left-color','#28a745');
                $scope.currentPlan = $scope.vega;
                $scope.myDesc = $scope.desc.vega;
                $scope.currentMenu = $scope.veg;
                $('.checkboxes').css('display','block');
                break;
            case 'jeden':
                $scope.currentPlan = $scope.jeden;
                break;
            default:
                break;
        }
    };

    $scope.diet = function () {
        $('.calories').css('background-color','#ffc107');
    };

    $scope.change = function () {
        $scope.currentPlan = $scope.vega;
        if($('.checkboxes #checkBox1').is(':checked') || $('#checkBox2').is(':checked')){
            $timeout(function () {
                $scope.currentPlan = $scope.jeden;
            },30);

        }
        if($('.checkboxes  #checkBox1').is(':checked') && $('#checkBox2').is(':checked')) {
            $timeout(function () {
                $scope.currentPlan = $scope.dwa;
            },30);
        }
    };

    var showNumber = false;

    $scope.contact = function() {
        if(showNumber === false){
            showNumber=true;
            $('.ordered').text('721 399 415');

        }
        else{
            showNumber=false;
            $('.ordered').text('Skontaktuj się z nami!');
        }
    };


    var showNumber2 = false;

    $scope.contact2 = function() {
        if(showNumber2 === false){
            showNumber2=true;
            $('.buttonOrder button').text('721 399 415');
        }
        else{
            showNumber2=false;
            $('.buttonOrder button').text('Zamów!');

        }
    };
});



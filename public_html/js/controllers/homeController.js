app.controller('HomeController', ['$scope', 'crudService', '$routeParams', function ($scope, crudService, $routeParams) {
        var vm = $scope;
        window.vm = vm;
        vm.id = $routeParams && $routeParams.id || false;
        vm.data = [];
        vm.gridEmailsOptions = {
            columnDefs: [
                {name: 'email'},
                {name: 'note'}
            ],
            enableCellEditOnFocus: true,
            enableRowSelection: true,
            selectionRowHeaderWidth: 35,
            enableSelectAll: true,
            multiSelect: true,
            onRegisterApi: function (gridApi) {
                vm.gridEmailsApi = gridApi;
            }
        };
        var populateData = function (response) {
            vm.data  = response.data && response.data.docs || [];
            if (vm.id) {
                vm.d = vm.data[0] || {};
            }

        };
        vm.read = function () {
            var fnd = {"cat": "persone"};
            if (vm.id)
                fnd._id = vm.id;
            crudService.fnd(fnd, populateData);
        };
        vm.save = function () {
            vm.d.cat = 'persone';
            if (vm.id == 'new')
                delete(vm.id)
            crudService.set(vm.d, function (r) {
                if (!vm.id) {
                    window.location = "#/persone/" + r.id
                }
            });
        };
        vm.remove = function () {
            crudService.del(vm.d, function (r) {
                window.location = "#/persone/"
            });
        };
        vm.init = function () {
            vm.read();
            var pr = function () {
                $('[ng-model="cognome"]').focus()
            }
            $(pr)
        };
        vm.init();
    }]);


/* TODO:
 
 autofocus
 notifiche 
 pulsanti salva, elimina eccetera quando necessario
 
 */
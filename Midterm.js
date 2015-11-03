angular.module('MidtermApp',[])
	.controller('MidtermCtrl', function($scope){

  $scope.groups = [
      {text:'Group 1', done:false},
      {text:'Group 2', done:false},
      {text:'Group 3', done:false}
     ];

    $scope.modules = [];
    $scope.sel = [];
    $scope.tasks = [];
        
  $scope.addStudent = function() {
        var count = $scope.sel.length ;
        count = count + 1 ;
        $scope.sel.push({text:$scope.selectedGroup.text, name:$scope.newStudentName ,   done:false , id : count});
        $scope.newStudentName = '';
        $scope.selectedGroup = '';
      };

   $scope.addTask = function() {
        var count = $scope.tasks.length ;
        count = count + 1 ;
        $scope.tasks.push({text:$scope.selectedTask.text, name:$scope.newTaskText , done:false , id : count});
        $scope.newTaskText = '';
        $scope.selectedTask = '';
	
      };

    $scope.trashGroup = function(id){
        var mods = $scope.modules ;
        $scope.modules = []; 
        angular.forEach(mods, function(mod) {
        if (mod.id != id) $scope.modules.push(mod);
      });
    };

     $scope.trashStudent = function(id){
        var ss = $scope.sel ;
        $scope.sel = []; 
        angular.forEach(ss, function(s) {
        if (s.id != id) $scope.sel.push(s);
      });
    };


    $scope.trashTask = function(id){
        var taskToTrash = $scope.tasks ;
        $scope.tasks = []; 
        angular.forEach(taskToTrash, function(task) {
        if (task.id != id) $scope.tasks.push(task);
      });
    };


       $scope.addModule = function() {
        var count = $scope.modules.length ;
        count = count + 1 ;
        $scope.modules.push({text:$scope.newModuleName, textarea:$scope.newModuleDescription , done:false , id :count});
        $scope.newModuleName = '';
        $scope.newModuleDescription = '';
        
      };

      $scope.assignTasksHere = [];

      $scope.assignTasks = function(Studentname , groupname , Taskname){
      var student = $scope.sel ; 

      angular.forEach(student, function(s) {
       
        if (s.name == Studentname){ 
          $scope.assignTasksHere.push({text: Studentname , group:groupname , task: Taskname});
        }
      });

      };

     $scope.remaining = function(group) {
      var count = 0 ;

       angular.forEach($scope.sel, function(s) {
         count += (s.text == group) ? 1 : 0 ;
      });
        return count;
    };

    $scope.groupTasks = function(group){
      var count = 0 ;

      angular.forEach($scope.tasks, function(t) {
         count += (t.text == group) ? 1 : 0 ;
      });
        return count;
    };


    $scope.completedTasks = function(group){
      var count = 0 ;

      angular.forEach($scope.tasks, function(t) {
        if(t.text == group){
        count += (!t.done) ? 0 : 1 ;
      }
      });
        return count;

    }
	});

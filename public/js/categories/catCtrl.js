(function() {
  angular.module('aJeopardyApp')
  .controller('catCtrl', catCtrl);
  function catCtrl($scope){
    $scope.categoriesArray = 
        [
            {cat: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
            {cat: 'category 2'},
            {cat: 'category 3'},
            {cat: 'category 4'},
            {cat: 'category 5'}
        ]
    $scope.firstRow = 
        [
            {q: 'first', a: 'first a', points: 100},
            {q: 'second', a: 'second a', points: 100},
            {q: 'third', a: 'third a', points: 100},
            {q: 'fourth', a: 'fourth a', points: 100},
            {q: 'fifth', a: 'fifth a', points: 100}
        ],
    $scope.secondRow =
        [
            {q: 'first', a: 'first a', points: 200},
            {q: 'second', a: 'second a', points: 200},
            {q: 'third', a: 'third a', points: 200},
            {q: 'fourth', a: 'fourth a', points: 200},
            {q: 'fifth', a: 'fifth a', points: 200}
        ],
    $scope.thirdRow =
        [
            {q: 'first', a: 'first a', points: 300},
            {q: 'second', a: 'second a', points: 300},
            {q: 'third', a: 'third a', points: 300},
            {q: 'fourth', a: 'fourth a', points: 300},
            {q: ' T Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, est possimus natus dolorem rerum illum doloremque adipisci voluptatem soluta consequatur, ratione expedita aspernatur suscipit dolorum repellendus', a: 'fifth a', points: 300}
        ],
    $scope.fourthRow =
        [
            {q: 'first', a: 'first a', points: 400},
            {q: 'second', a: 'second a', points: 400},
            {q: 'third', a: 'third a', points: 400},
            {q: 'fourth', a: 'fourth a', points: 400},
            {q: 'fifth', a: 'fifth a', points: 400}
        ],
    $scope.fifthRow =
        [
            {q: 'first', a: 'first a', points: 500},
            {q: 'second', a: 'second a', points: 500},
            {q: 'third', a: 'third a', points: 500},
            {q: 'fourth', a: 'fourth a', points: 500},
            {q: 'fifth', a: 'fifth a', points: 500}
        ];
}
})();


//   $scope.category5 = [
//     {
//         name: 'Category 5',
//         cat5:
//         [
//             {
//             points: 100,
//             question: 'Question 1',
//             answer: 'answer'
//             },
//             {
//             points: 200,
//             question: 'Question 2',
//             answer: 'answer'
//             },
//             {
//             points: 300,
//             question: 'Question 3',
//             answer: 'answer'
//             },
//             {
//             points: 400,
//             question: 'Question 4',
//             answer: 'answer'
//             },
//             {
//             points: 500,
//             question: 'Question 5',
//             answer: 'answer'
//             }
//         ]
//     } // end cat5 //

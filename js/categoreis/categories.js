(function() {
  angular.module('create_A_game')
  .controller('catCtrl', catCtrl);
  function categories($scope){
    $scope.cat1 = [
    {
        name: 'Category 1',
        cat1:
        [
            {
            points: 100,
            question: 'Question 1',
            answer: 'answer'
            },
            {
            points: 200,
            question: 'Question 2',
            answer: 'answer'
            },
            {
            points: 300,
            question: 'Question 3',
            answer: 'answer'
            },
            {
            points: 400,
            question: 'Question 4',
            answer: 'answer'
            },
            {
            points: 500,
            question: 'Question 5',
            answer: 'answer'
            }
        ]
    }
  ] // end cat1 //
    $scope.cat2 = [
    {
        name: 'Category 2',
        cat2:
        [
            {
            points: 100,
            question: 'Question 1',
            answer: 'answer'
            },
            {
            points: 200,
            question: 'Question 2',
            answer: 'answer'
            },
            {
            points: 300,
            question: 'Question 3',
            answer: 'answer'
            },
            {
            points: 400,
            question: 'Question 4',
            answer: 'answer'
            },
            {
            points: 500,
            question: 'Question 5',
            answer: 'answer'
            }
        ]
    }
  ] // end cat2 //
    $scope.cap3 = [
    {
        name: 'Category 3',
        cat3:
        [
            {
            points: 100,
            question: 'Question 1',
            answer: 'answer'
            },
            {
            points: 200,
            question: 'Question 2',
            answer: 'answer'
            },
            {
            points: 300,
            question: 'Question 3',
            answer: 'answer'
            },
            {
            points: 400,
            question: 'Question 4',
            answer: 'answer'
            },
            {
            points: 500,
            question: 'Question 5',
            answer: 'answer'
            }
        ]
    }
  ] // end cat3 //
    $scope.cat4 = [
    {
        name: 'Category 4',
        cat4:
        [
            {
            points: 100,
            question: 'Question 1',
            answer: 'answer'
            },
            {
            points: 200,
            question: 'Question 2',
            answer: 'answer'
            },
            {
            points: 300,
            question: 'Question 3',
            answer: 'answer'
            },
            {
            points: 400,
            question: 'Question 4',
            answer: 'answer'
            },
            {
            points: 500,
            question: 'Question 5',
            answer: 'answer'
            }
        ]
    }
  ] // end cat4 //
  $scope.cat5 = [
    {
        name: 'Category 5',
        cat5:
        [
            {
            points: 100,
            question: 'Question 1',
            answer: 'answer'
            },
            {
            points: 200,
            question: 'Question 2',
            answer: 'answer'
            },
            {
            points: 300,
            question: 'Question 3',
            answer: 'answer'
            },
            {
            points: 400,
            question: 'Question 4',
            answer: 'answer'
            },
            {
            points: 500,
            question: 'Question 5',
            answer: 'answer'
            }
        ]
    } // end cat5 //
]
}
})();

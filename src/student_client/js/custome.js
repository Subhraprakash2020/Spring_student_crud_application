$(document).ready(function() {
    function loadStudents(){
        $('#student-table tbody').empty();
        $.ajax({
            url: 'http://localhost:8080/api/student',
            type: 'GET',
            success: function(data) {
              data.forEach(function(student) {
                console.log(student); // You can see it in console
                $('#student-table tbody').append(`
                  <tr data-id="${student.id}">
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.gender}</td>
                    <td>${student.parentsName}</td>
                    <td>${student.fees}</td>
                    <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                  </tr>
                `);
              });
            },
            error: function(error) {
              console.error('Error fetching student data:', error);
            }
        });
    }

    loadStudents();

    $('#student-form').submit(function(e) {
        e.preventDefault();

        const studentId = $('#student-id').val();
        const studentData = {
            name: $('#name').val(),
            gender: $('#gender').val(),
            parentsName: $('#parentsName').val(),
            fees: $('#fees').val()
        }

        if(studentId){
            $.ajax({
                url: `http://localhost:8080/api/student/${studentId}`,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(studentData),
                success: function(){
                    alert('Student Updated!');
                    $('#student-form')[0].reset();
                    $('#student-id').val('');
                    loadStudents();
                },
                error: function(error){
                    console.error('Error updating student', error);
                }
            });
        }else{
            $.ajax({
                url: 'http://localhost:8080/api/student',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(studentData),
                success: function() {
                  alert('Student added!');
                  $('#student-form')[0].reset();
                  loadStudents();
                },
                error: function(error) {
                  console.error('Error adding student:', error);
                }
            });
        }
    });

    $(document).on('click', '.edit-btn', function() {
        const row = $(this).closest('tr');
        const id = row.data('id');
        const name = row.find('td:eq(1)').text();
        const gender = row.find('td:eq(2)').text();
        const parentsName = row.find('td:eq(3)').text();
        const fees = row.find('td:eq(4)').text();

        $('#student-id').val(id);
        $('#name').val(name);
        $('#gender').val(gender);
        $('#parentsName').val(parentsName);
        $('#fees').val(fees);
    });

    $(document).on('click', '.delete-btn', function() {
        if (!confirm('Are you sure to delete this student?')) return;

        const id = $(this).closest('tr').data('id');

        $.ajax({
          url: `http://localhost:8080/api/student/${id}`,
          type: 'DELETE',
          success: function() {
            alert('Student deleted!');
            loadStudents();
          },
          error: function(error) {
            console.error('Error deleting student:', error);
          }
        });
    });

});
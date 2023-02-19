import "./App.css";

function App() {
  return (
    <div className="content-table">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Task 1 (10)</th>
            <th>Task 2 (10)</th>
            <th>grade</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Henry</td>
            <td>Martins</td>
            <td>19</td>
            <td>2/05/2001</td>
            <td>male</td>
            <td>10</td>
            <td>6</td>
            <td>16</td>
          </tr>

          <tr>
            <td>2</td>
            <td>James</td>
            <td>Ugo</td>
            <td>15</td>
            <td>5/08/1998</td>
            <td>male</td>
            <td>9</td>
            <td>6</td>
            <td>15</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Gabriel</td>
            <td>John</td>
            <td>20</td>
            <td>8/07/1987</td>
            <td>male</td>
            <td>8</td>
            <td>4</td>
            <td>12</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Chioma</td>
            <td>Okorie</td>
            <td>19</td>
            <td>9/09/2000</td>
            <td>female</td>
            <td>8</td>
            <td>9</td>
            <td>17</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Joshua</td>
            <td>Monday</td>
            <td>19</td>
            <td>10/04/2003</td>
            <td>male</td>
            <td>10</td>
            <td>8</td>
            <td>18</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Okezie</td>
            <td>Oko</td>
            <td>19</td>
            <td>9/09/2004</td>
            <td>male</td>
            <td>9</td>
            <td>10</td>
            <td>19</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

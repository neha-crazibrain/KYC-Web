function handleAWChange() {
  const selectedAW = document.getElementById('aw_code').value;
  const awsmSelect = document.getElementById('awsm_code');

  awsmSelect.innerHTML = '<option selected disabled value="">--select --</option>';

  fetch(`http://localhost:4200/api/awsm?selectedAW=${selectedAW}`)
    .then((res) => res.json())
    .then((data) => {

      data.forEach((item) => {
        const option = document.createElement('option');
        option.value = item.awsm_code;
        option.text = item.awsm_code;
        awsmSelect.appendChild(option);
      });
    });
}
const linkNode = document.querySelector('#aw_code');
linkNode.addEventListener('change', handleAWChange);



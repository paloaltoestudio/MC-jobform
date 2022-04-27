

// Job Form

try {
    const jobButton = document.querySelector('.job_button');
    const jobForm = document.querySelector('.job_form form');
    const msg = document.querySelector('.msg_job');

    const form = document.querySelector('.job_form form');
    const couple = document.querySelector('#couple');
    const requiredFields = document.querySelectorAll('[required]');
    
    const childrenQtySelector = document.querySelector('#child_custrecord139 input');
    const children1 = document.querySelector('#children1');
    const children2 = document.querySelector('#children2');
    const children3 = document.querySelector('#children3');

    function handleSendingJobForm(e) {
        e.preventDefault();

        let i = 0;

        requiredFields.forEach(required => {

            console.log(required.value);
            if(required.value == ''){
                window.scrollTo(0,0);
                required.style.borderColor = 'red';
                required.parentElement.querySelector('.msg_error').style.display = 'block';
                i++;

            } else {
                window.scrollTo(0,0);
                required.style.borderColor = '';
                required.parentElement.querySelector('.msg_error').style.display = 'none';

            }
        });
        
        if(i === 0){
            jobButton.style.display = 'none';
            jobForm.style.display = 'none';
            msg.style.display = 'block';
    
            jobForm.submit();
        }

        
    }

    jobButton.addEventListener('click', handleSendingJobForm);

    function checkCouple(field){
        if(field.value === '1' || field.value === '3'){
            couple.style.display='block';
        } else {
            couple.style.display='none';
        }
    }
    
    function checkField(field){
        if(field.checked){
            document.querySelector('#child_'+field.name).style.display='block';
        } else {
            document.querySelector('#child_'+field.name).style.display='none';
        }
    }

    function childrenQty(field){
        console.log(field.value);
        if(field.value === '1'){
            children1.style.display = 'block';
            children2.style.display = 'none';
            children3.style.display = 'none';
        } else if(field.value === '2'){
            children1.style.display = 'block';
            children2.style.display = 'block';
            children3.style.display = 'none';
        } else if(field.value === '3' || field.value > '3'){
            children1.style.display = 'block';
            children2.style.display = 'block';
            children3.style.display = 'block';
        } else if(field.value == ''){
            children1.style.display = 'none';
            children2.style.display = 'none';
            children3.style.display = 'none';
        } 
    }
    
    form.addEventListener('change', function(e){
        if(e.target.name === 'custrecord13'){
            checkCouple(e.target);
        } else if(e.target.classList.contains('check')) {
            checkField(e.target)
        } else return;
    });

    childrenQtySelector.addEventListener('keyup', function(e){
        childrenQty(e.target);
    });

    //Add Job History
    const addJob = document.querySelector('.add_job');

    addJob.addEventListener('click', function(e){
        e.preventDefault();

        let jobItem = document.querySelectorAll('.job_history.show');
        let jobItemLen = jobItem.length;
        let jobItemShow = document.querySelector(`.job_history_${jobItemLen+1}`);

        jobItemShow.classList.add('show');

        if(jobItemLen > 0){
            window.scrollBy(0,350);
        }

        if(jobItemLen == 2){
            addJob.style.display = 'none';
        }
    });

    //Add Personal References
    const addReference = document.querySelector('.add_reference');

    addReference.addEventListener('click', function(e){
        e.preventDefault();

        let referenceItem = document.querySelectorAll('.reference.show');
        let referenceItemLen = referenceItem.length;
        let referenceItemShow = document.querySelector(`.reference_${referenceItemLen+1}`);

        referenceItemShow.classList.add('show');

        if(referenceItemLen == 0){
            window.scrollBy(0,180);
        }

        if(referenceItemLen == 2){
            addReference.style.display = 'none';
        }
    });
    

    //Add Certification
    let certCounter = 0;

    const certWrapper = document.querySelector('.certificate_wrapper');

    const addCert = document.querySelector('.add_cert');

    let certName = '';
    let institutionName = '';

    function fieldsValues(certCounter){
        switch(certCounter){
            case 0:
                certName = 'custrecord255';
                institutionName = 'custrecord75';
                break;
            case 1:
                certName = 'custrecord256';
                institutionName = 'custrecord257';
                break;
            case 2:
                certName = 'custrecord258';
                institutionName = 'custrecord262';
                break;
            case 3:
                certName = 'custrecord259';
                institutionName = 'custrecord263';
                break;
            case 4:
                certName = 'custrecord260';
                institutionName = 'custrecord261';
                break;
            case 5:
                certName = 'custrecord264';
                institutionName = 'custrecord265';
                break;
            case 6:
                certName = 'custrecord266';
                institutionName = 'custrecord267';
                break;
            case 7:
                certName = 'custrecord268';
                institutionName = 'custrecord269';
                break;
            case 8:
                certName = 'custrecord270';
                institutionName = 'custrecord271';
                break;
            case 9:
                certName = 'custrecord272';
                institutionName = 'custrecord273';
                break;
            default:
                certName = '';
                institutionName = '';
                break;
        }
    }

    addCert.addEventListener('click', function(e){
        e.preventDefault();

        console.log(e)
        
        if(certCounter < 10){
            fieldsValues(certCounter);

            const newItem = `<div class="cols certificate_item item_${certCounter}">
                            <div class="col">
                                <div class="form-group">
                                    <label for="">Certificación ${certCounter + 1}</label>
                                    <input type="text" id="${certName}" name="${certName}">
                                </div>
                            </div>
    
                            <div class="col">
                                <div class="form-group">
                                    <label for="">Institución ${certCounter + 1}</label>
                                    <input type="text" id="${institutionName} name="${institutionName}">
                                </div>
                            </div>
                        </div>`;

            certWrapper.insertAdjacentHTML('beforeend', newItem);
            // window.scrollBy(0,50);
            certCounter ++;

            if(certCounter == 10){
                addCert.style.display = 'none';
            }
        }
    });

} catch (error) {
    console.log(error)
}
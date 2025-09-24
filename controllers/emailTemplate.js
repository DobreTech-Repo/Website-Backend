const notification_template = `<div>
  <div style="width:600px; margin:auto">
    <div style="background:#202124; padding:30px; color:white; font-size:36px">Hello \${firstName}, thanks for submitting your
      registration! to enroll in to The University of Buea FutureTech - \${program}</div>
    <div style="background:#F9F9F9; padding:30px; font-size:20px">We got your registration and will be waiting for
      confirmation of your registration fee payment :) <br><br>Firstname: \${firstName}<br>Lastname: \${lastName}<br>Email:
      \${email}<br>Phone: \${phone}<br>Date of Birth: \${birth}<br>Address: \${address}<br>Gender:
      \${gender}<br>Select Country: \${country}<br>Select Program: \${program}<br>Start Month: \${date}<br>Registration Fee: \${payment_method}<br><br><br>DobreTech is a premier institution that specializes in providing cutting-edge training
      programs in information technology and with our passion for innovation and dedication to excellence, we strive to
      equip individuals with the skills and knowledge necessary to thrive in the digital era. <br>DobreTech and
      University of Buea, Partner to Offer Career Hands-on Training in Cyber Security &amp; Cloud Computing </div>
  </div>
</div>`

const notification_template_to_admin = `<div>
  <div style="width:600px; margin:auto">
    <div style="background:#F9F9F9; padding:30px; font-size:20px">You got new registration. <br><br>Firstname: \${firstName}<br>Lastname: \${lastName}<br>Email:
      \${email}<br>Phone: \${phone}<br>Date of Birth: \${birth}<br>Address: \${address}<br>Gender:
      \${gender}<br>Select Country: \${country}<br>Select Program: \${program}<br>Start Month: \${date}<br>Registration Fee: \${payment_method}<br><br>
    </div>
  </div>
</div>`

const welcome_template = `<div>
  <div class="rps_f615">
    <div>
      <p>Hello,</p>
      <p><strong><span data-markjs="true" class="markq1f0pxh8j uM2yb">Congratulations</span></strong> on your interest
        in joining the University of Buea, Intensive Career Training delivered by DobreTech.</p>
      <p>The Career Training program has been scheduled to start <strong>21st October</strong> 2025, with delivery mode:
        Virtual Classroom (Online) - Instructor-led.</p>
      <p>You will be able to study both On-campus (University of Buea - IT Center) or Online at your desire.</p>
      <p>The Program is covered in <strong>6<em> months / 2 to
            4 days a week</em></strong> (more details to be provided about the weekly timetable)</p>
      <p><strong>Program Details and Requirements Attached in this email.</strong></p>
      <p><strong>Registration Fees and Program Fees Schedule</strong></p>
      <ul>
        <li>Registration Fees: <strong>10,000frs CFA </strong></li>
        <li>Local (Cameroon)- <strong>700,000Frs CFA </strong></li>
        <li>International Student - 1,000,000frs CFA </li>
        <li>Payment of program fees: either two installment or full payment.</li>
      </ul>
      <p><strong>Next Step:</strong></p>
      <ul>
        <li>Registration Fees Payment: <strong>10,000frs</strong></li>
      </ul>
      <p><strong>Final Step:</strong></p>
      <ul>
        <li>Payment of program fees: either the first installment or full fees.</li>
      </ul>
      <p>Please note your enrollment into DobreTech online learning portal will be confirmed upon payment of the
        registration fees and either program fees installation or full.</p>
      <p><strong>Payment Methods</strong></p>
      <ol>
        <li>MTN Mobile Money</li>
      </ol>
      <ul>
        <li><strong>Number:</strong> 671163568</li>
        <li><strong>Name:</strong> Théodore THADDÉE BELLA MANGA</li>
      </ul>
      <p></p>
      <ol start="2">
        <li>Bank Deposit</li>
      </ol>
      <ul>
        <li><strong>Bank Name:</strong> Afriland First Bank</li>
        <li><strong>Name:</strong> DobreTech Group (SARL)</li>
        <li><strong>Account Number:</strong> 08924831001</li>
        <li><strong>IBAN:</strong> CM21 10005 00001 08924831001 - 91</li>
      </ul>
      <p>Please do confirm after payment and provide payment details</p>
      <p>In case of any queries do not hesitate to contact us by reverting to this email.</p>
      <p aria-hidden="true">&nbsp;</p>
      <p>Thanks</p>
      <p>Best Regards</p>
    </div>
  </div>
</div>`

const contact_template_to_user = `<div>
  <div style="width:600px; margin:auto">
    <div style="background:#202124; padding:30px; color:white; font-size:36px">Hello \${name}, thank you for contacting us!</div>
    <div style="background:#F9F9F9; padding:30px; font-size:20px">We got your message and will respond within 1 business day.<br><br><br>DobreTech is a premier institution that specializes in providing cutting-edge training
      programs in information technology and with our passion for innovation and dedication to excellence, we strive to
      equip individuals with the skills and knowledge necessary to thrive in the digital era. <br>DobreTech and
      University of Buea, Partner to Offer Career Hands-on Training in Cyber Security &amp; Cloud Computing </div>
  </div>
</div>`

const contact_template_to_admin = `<div>
  <div style="width:600px; margin:auto">
    <div style="background:#F9F9F9; padding:30px; font-size:20px">name: \${name}<br>Phone:
      \${phone}<br>Email:
      \${email}<br>Message: \${message}<br></div>
  </div>
</div>`

module.exports={notification_template, notification_template_to_admin, welcome_template, contact_template_to_user, contact_template_to_admin}
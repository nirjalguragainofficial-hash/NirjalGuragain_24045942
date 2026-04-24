// Team member data
const teamMembers = {
    member1: {
        name: "Nirjal Guragain",
        role: "Product page-maker",
        bio: ""
    member2: {
        name: "Siddhant Tamrakar",
        role: "Home page-maker",
        bio: ""
    member3: {
        name: "Mandip chaudhary",
        role: "Research page-maker",
        bio: " "
    }
    member4: {
        name: "Prayash Bhattarai",
        role: "Blog page-maker",
        bio: ""
    }
    member5: {
        name: "Sujan Kharel",
        role: "Abouts us - maker",
        bio: "Studied in iic 
       permanent Address:Belaka-3rampur,udayapur.
       Temporary Address:baliya,morang
       +2 Pass:Kasturi Academy school-9,b.pchowk,itahari
        "
    }
};

// Function to display the modal with team member details
function showInfo(memberId) {
    const member = teamMembers[memberId];
    
    document.getElementById('member-name').innerText = member.name;
    document.getElementById('member-role').innerText = member.role;
    document.getElementById('member-bio').innerText = member.bio;
    
    document.getElementById('info-modal').style.display = 'block';
}
// Function to close the modal
function closeInfo() {
    document.getElementById('info-modal').style.display = 'none';

}
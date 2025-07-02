<?php include 'inside/header.php'; ?>


<section class="inner_Section">
    <div class="container">
        <div class="subheadline ">
            <a href="#">Home - Contact</a>
        </div>
        <h2>Let’s Collaborate on Modern <br> Interior Design Solutions</h2>
    </div>
</section>


<div class="contact_form">
    <div class="container clearfix">
        <div class="row">
            <div class="col-md-6">
                <img src="https://cdn.prod.website-files.com/67d65e4a7a8964eda8d774b0/67dbcd3447cc10b44c9c87d7_contact%20us%20Image%203-p-500.jpg"
                    alt="" class="img-fluid ">
            </div>
            <div class="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="full-name">Full Name*</label>
                        <input type="text" id="full-name" value="Liam Anderson" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number*</label>
                        <input type="tel" id="phone" value="(22) 555-7880" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="email">Your Email*</label>
                        <input type="email" id="email" value="info@intoria.com" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="subject">Subject*</label>
                        <input type="text" id="subject" value="Luxury Interior Design" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="message">Your Message*</label>
                        <textarea id="message" placeholder="Please Type Your Message Here..."
                            class="form-control"></textarea>
                    </div>

                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </div>

</div>

<section class="details_address py-5 ">
    <div class="container">
        <div class="row gy-4">

            <!-- Email -->
            <div class="col-md-4">
                <div class="d-flex align-items-start p-3  rounded  h-100  dotted">
                    <div class="icon me-3 text-primary fs-3">
                        <i class="bi bi-envelope-fill"></i>
                    </div>
                    <div class="details">
                        <label class="fw-semibold d-block mb-1">Email</label>
                        <a href="mailto:intorio@example.com" class="text-decoration-none text-dark">
                            intorio@example.com
                        </a>
                    </div>
                </div>
            </div>

            <!-- Phone -->
            <div class="col-md-4">
                <div class="d-flex align-items-start p-3  rounded  h-100  dotted">
                    <div class="icon me-3 text-success fs-3">
                        <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div class="details">
                        <label class="fw-semibold d-block mb-1">Phone</label>
                        <a href="tel:+919999999999" class="text-decoration-none text-dark">
                            +91 99999 99999
                        </a>
                    </div>
                </div>
            </div>

            <!-- Address -->
            <div class="col-md-4">
                <div class="d-flex align-items-start p-3  rounded  h-100 ">
                    <div class="icon me-3 text-danger fs-3">
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div class="details">
                        <label class="fw-semibold d-block mb-1">Address</label>
                        <div>123, MG Road, Bengaluru, India</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<section>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21697137707!2d88.26477866039816!3d22.535564849835755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1750750476161!5m2!1sen!2sin"
        width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>


<?php include 'inside/footer.php'; ?>
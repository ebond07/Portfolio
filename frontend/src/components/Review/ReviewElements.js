import styled from "@emotion/styled";

export const ReviewWrapper = styled.div`
    margin: 5rem 0;
    text-align: center;
`;

export const Testimonial = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 1rem;

    .PrimaryBtn {
        padding: 3rem 6rem;
        font-size: 2rem;
    }

    span {
        font-size: 1rem;
        font-weight: 400;
    }

    @media (min-width: 576px) {
        span {
            font-size: 1.25rem;
        }
    }
    @media (min-width: 992px) {
        span {
            font-size: 1.5rem;
        }
    }
`;

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease;

    &.show {
        opacity: 1;
        visibility: visible;
    }
`;

export const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 80%;
    max-width: 600px;
    transition: transform 0.3s ease-out;
    transform: translateY(-50px);
    opacity: 0;
    &.show {
        transform: translateY(0);
        opacity: 1;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-top: 10px;
        }

        input[type="text"],
        textarea {
            margin-top: 5px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`;